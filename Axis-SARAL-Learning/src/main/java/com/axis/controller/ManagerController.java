package com.axis.controller;

import com.axis.entity.Manager;
import com.axis.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class ManagerController {

    @Autowired
    private ManagerService managerService;

    @GetMapping("/managers")
    public List<Manager> getAllManagers() {
        return managerService.getAllManagers();
    }

    @GetMapping("/manager/{managerId}")
    public Manager getManagerById(@PathVariable String managerId) {
        return managerService.getManagerById(managerId);
    }

    @PostMapping("/manager/add")
    public ResponseEntity<String> addManager(@RequestBody Manager manager) {
        managerService.addManager(manager);
        return new ResponseEntity<String>("Manager is added successfully.", HttpStatus.OK);
    }

    @PutMapping("/manager/update/{managerId}")
    public ResponseEntity<String> updateManager(@PathVariable String managerId, @RequestBody Manager manager) {
        managerService.updateManager(managerId, manager);
        return new ResponseEntity<String>(" Manager Id: " + managerId + "is updated Successfully.", HttpStatus.OK);
    }

    @DeleteMapping("/manager/delete/{managerId}")
    public ResponseEntity<String> deleteManager(@PathVariable String managerId) {
        managerService.deleteManager(managerId);
        return new ResponseEntity<String>("Manager Id: " + managerId + "is deleted Successfully.", HttpStatus.OK);
    }
}
