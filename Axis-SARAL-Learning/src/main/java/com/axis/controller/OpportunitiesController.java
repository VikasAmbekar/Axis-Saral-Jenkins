package com.axis.controller;

import com.axis.entity.Opportunities;
import com.axis.service.OpportunitiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class OpportunitiesController {
    @Autowired
    private OpportunitiesService opportunitiesService;

    @GetMapping("/opportunities")
    public List<Opportunities> getAllProjects() {
        return opportunitiesService.getAllProjects();
    }

    @GetMapping("/opportunity/{projectId}")
    public Opportunities findProjectById(@PathVariable String projectId) {
        return opportunitiesService.getProjectById(projectId);
    }

    @PostMapping("/opportunity/add")
    public ResponseEntity<String> addProject(@RequestBody Opportunities opportunities) {
        opportunitiesService.addProject(opportunities);
        return new ResponseEntity<>("Opportunity added successfully.", HttpStatus.CREATED);
    }

    @PutMapping("/opportunity/update/{projectId}")
    public ResponseEntity<String> updateProject(@PathVariable String projectId, @RequestBody Opportunities opportunities) {
        opportunitiesService.updateProjectById(projectId, opportunities);
        return new ResponseEntity<>("Opportunity updated successfully", HttpStatus.OK);
    }

    @DeleteMapping("/opportunity/delete/{projectId}")
    public ResponseEntity<String> deleteProject(@PathVariable String projectId){
        opportunitiesService.deleteProjectById(projectId);
        return new ResponseEntity<>("Opportunity deleted successfully.",HttpStatus.OK);
    }
}
