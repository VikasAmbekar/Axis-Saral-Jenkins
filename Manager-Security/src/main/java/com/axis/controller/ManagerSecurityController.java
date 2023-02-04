package com.axis.controller;

import com.axis.entity.Manager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ManagerSecurityController {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/all-managers")
    public List<Manager> getAllManagers(){
        String url ="http://axis-saral-learning/managers";
        return restTemplate.getForObject(url, List.class);
    }

    @GetMapping("/welcome")
    public String welcome(){
        return "Welcome Manager";
    }
}
