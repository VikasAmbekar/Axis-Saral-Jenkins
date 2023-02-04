package com.axis.controller;

import com.axis.entity.Employee;
import com.axis.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:3000/")
@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/employee/{employeeId}")
    public Employee getEmployeeById(@PathVariable String employeeId){
        return employeeService.getEmployeeById(employeeId);
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployee(){
        return employeeService.getAllEmployee();
    }

    @PostMapping("/employee/add")
    public ResponseEntity<String> addEmployee(@RequestBody Employee employee){
        employeeService.addEmployee(employee);
        return new ResponseEntity<String>("Employee is added successfully.", HttpStatus.OK);
    }

    @PutMapping("/employee/update/{employeeId}")
    public ResponseEntity<String> updateEmployee(@PathVariable String employeeId, @RequestBody Employee employee){
        employeeService.updateEmployee(employeeId, employee);
        return new ResponseEntity<String> ("Employee Id: "+ employeeId +" is updated Successfully.", HttpStatus.OK);
    }

    @DeleteMapping("/employee/delete/{employeeId}")
    public ResponseEntity<String> deleteEmployee(@PathVariable String employeeId){
        employeeService.deleteEmployee(employeeId);
        return new ResponseEntity<String>("Employee Id: "+ employeeId +"is deleted Successfully.", HttpStatus.OK);
    }
}
