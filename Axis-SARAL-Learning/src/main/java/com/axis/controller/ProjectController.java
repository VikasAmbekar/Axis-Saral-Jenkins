package com.axis.controller;

import com.axis.entity.Project;
import com.axis.repository.ProjectRepository;
import com.axis.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class ProjectController {

    @Autowired
    private ProjectService projectService;
    @Autowired
    private ProjectRepository projectRepository;

    @GetMapping("/projects")
    public List<Project> getAllProjects(){
        return projectService.getAllProjects();
    }

    @GetMapping("/project/{projectId}")
    public Project getProjectById(@PathVariable String projectId){
        return projectService.getProjectById(projectId);
    }

    @PostMapping("/project/add")
    public ResponseEntity<String> addProject(@RequestBody Project project){
        projectService.addProject(project);
        return new ResponseEntity<String>("Project added successfully.", HttpStatus.CREATED);
    }

    @PutMapping("/project/update/{projectId}")
    public ResponseEntity<String> updateProject(@PathVariable String projectId,@RequestBody Project project){
        projectService.updateProject(projectId, project);
        return new ResponseEntity<>("Project with Id: "+projectId+" is updated successfully.", HttpStatus.OK);
    }

    @DeleteMapping("/project/delete/{projectId}")
    public ResponseEntity<String> deleteProject(@PathVariable String projectId){
        projectService.deleteProject(projectId);
        return new ResponseEntity<>("Project with Id: "+projectId+" is deleted successfully.", HttpStatus.OK);
    }
}
