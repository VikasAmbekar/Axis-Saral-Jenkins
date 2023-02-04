package com.axis.controller;

import com.axis.entity.SupportTeam;
import com.axis.service.SupportTeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SupportTeamController {

    @Autowired
    private SupportTeamService supportTeamService;

    @GetMapping("/stmembers")
    public List<SupportTeam> getAllSupportTeamMembers(){
        return supportTeamService.getAllSupportTeamMembers();
    }

    @GetMapping("/stmember/{employeeId}")
    public SupportTeam getSupportTeamMemberById(@PathVariable String employeeId){
        return supportTeamService.getSupportTeamMemberById(employeeId);
    }

    @PostMapping("/stmember/add")
    public ResponseEntity<String> addSupportTeamMember(@RequestBody SupportTeam supportTeam){
        supportTeamService.addSupportTeamMember(supportTeam);
        return new ResponseEntity<>("Support team member added successfully.", HttpStatus.CREATED);
    }

    @PutMapping("/stmember/update/{employeeId}")
    public ResponseEntity<String> updateSupportTeamMember(@PathVariable String employeeId,@RequestBody SupportTeam supportTeam){
        supportTeamService.updateSupportTeamMember(employeeId, supportTeam);
        return new ResponseEntity<>("Support team member updated successfully.", HttpStatus.OK);
    }

    @DeleteMapping("/stmember/delete/{employeeId}")
    public ResponseEntity<String> deleteSupportTeamMember(@PathVariable String employeeId){
        supportTeamService.deleteSupportTeamMember(employeeId);
        return new ResponseEntity<>("Support team member deleted successfully.", HttpStatus.OK);
    }
}
