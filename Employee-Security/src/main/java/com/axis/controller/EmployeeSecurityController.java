package com.axis.controller;

import com.axis.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class EmployeeSecurityController {

    @Autowired
    private RestTemplate restTemplate;


    @GetMapping("/all-employees")
    public List<Employee>  getAllEmployees(){
        String url = "http://axis-saral-learning/employees";
        return restTemplate.getForObject(url, List.class);
    }

    @GetMapping("/welcome")
    public String welcome(){
        return "Welcome employee";
    }
}
