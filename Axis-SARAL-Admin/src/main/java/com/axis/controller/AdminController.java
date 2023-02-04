package com.axis.controller;

import com.axis.Service.AdminService;
import com.axis.entity.Admin;
import com.axis.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000/")
public class AdminController {

    @Autowired
    private AdminService As;

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/admin/employee/{employeeId}")
    public Employee getEmployeeById(@PathVariable String employeeId){
        String url="http://axis-saral-learning/employee/"+employeeId;
        Employee empById=restTemplate.getForObject(url, Employee.class);
        return  empById;
    }

    @GetMapping("/admin/employees")
    public List<Employee> getAllemployee(){
        String url="http://axis-saral-learning/employees";
        List<Employee> getAllEmp= restTemplate.getForObject(url, List.class);
        return getAllEmp;
    }


    @GetMapping("/admins")
    public List<Admin> getAllAdmin(){
        return As.getAllAdmin();
    }

    @PostMapping("/admin/add")
    public ResponseEntity<String> saveAdmin(@RequestBody Admin admin){
        As.saveAdmin(admin);
        return new ResponseEntity<String>("Admin is Added to Db !!!", HttpStatus.ACCEPTED);
    }

    @GetMapping("/admin/{mobileNo}")
    public Optional<Admin> getAdminByMobileNo(@PathVariable long mobileNo){
        return As.getAdminByMobileNo(mobileNo);
    }

    @PutMapping("/admin/update/{mobileNo}")
    public ResponseEntity<String> updateAdmin(@RequestBody Admin admin,@PathVariable long mobileNo){
        As.updateAdmin(admin,mobileNo);
        return new ResponseEntity<String>("Admin is Updated to Db !!!", HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/admin/delete/{mobileNo}")
    public ResponseEntity<String> deleteAdminByMobileNo(@PathVariable long mobileNo){
        As.deleteAdminByMobileNo(mobileNo);
        return new ResponseEntity<String>("Admin is Deleted to Db !!!", HttpStatus.ACCEPTED);
    }

}
