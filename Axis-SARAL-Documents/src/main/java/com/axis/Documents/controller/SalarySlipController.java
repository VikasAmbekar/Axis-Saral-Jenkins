package com.axis.Documents.controller;

import java.util.List;

import com.axis.Documents.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.axis.Documents.entity.SalarySlip;
import com.axis.Documents.service.SalarySlipService;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin("http://localhost:3000/")
public class SalarySlipController {
	@Autowired
	private SalarySlipService salarySlipService;


	@Autowired
	private RestTemplate restTemplate;

	@GetMapping("/salaryslip/employees")
		public List<Employee> getAllemployee(){
			String url="http://localhost:8085/employees";
			List<Employee> getAllEmp= restTemplate.getForObject(url, List.class);
			return getAllEmp;
	}
	@GetMapping("/salaryslips")
	 public List<SalarySlip> getAllSalarySlip(){
        return salarySlipService.getAllSalarySlip();
	 }
	@GetMapping("/salaryslip/{salaryId}")
	public SalarySlip getSalarySlipById(@PathVariable Long salaryId){
        return salarySlipService.getSalarySlipById(salaryId);
    }
	@PostMapping("salaryslip/add")
	public ResponseEntity<String> addSalarySlip(@RequestBody SalarySlip salarySlip){
        salarySlipService.addSalarySlip(salarySlip);
        return new ResponseEntity<String>("Employee is added successfully.", HttpStatus.OK);
	}

	@PutMapping("/salaryslip/update/{salaryId}")
	public ResponseEntity<String> updateSalarySlip(@PathVariable Long salaryId, @RequestBody SalarySlip salarySlip){
        salarySlipService.updateSalarySlip(salaryId, salarySlip);
        return new ResponseEntity<String> ("Salary Id: "+ salaryId +" is updated Successfully.", HttpStatus.OK);
	
	}
	@DeleteMapping("/salaryslip/delete/{salaryId}")
	 public ResponseEntity<String> deleteSalarySlip(@PathVariable Long salaryId){
        salarySlipService.deleteSalarySlipId(salaryId);
        return new ResponseEntity<String>("Salary Id: "+ salaryId +"is deleted Successfully.", HttpStatus.OK);
	
	}

}
