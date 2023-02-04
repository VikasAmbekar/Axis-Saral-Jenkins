package com.axis.service;

import com.axis.entity.Project;
import com.axis.exception.ProjectNotFoundException;
import com.axis.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImpl implements ProjectService{

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public Project getProjectById(String projectId) {

      Optional<Project> projectOptional = projectRepository.findById(projectId);
      if (!projectOptional.isPresent()){
          throw new ProjectNotFoundException("Project not found with Id: "+projectId);

      }
      return projectOptional.get();
    }

    @Override
    public List<Project> getAllProjects() {
        return (List<Project>)projectRepository.findAll();
    }

    @Override
    public void addProject(Project project) {
        projectRepository.save(project);
    }

    @Override
    public void updateProject(String projectId, Project project) {
        projectRepository.save(project);
    }

    @Override
    public void deleteProject(String projectId) {
        projectRepository.deleteById(projectId);
    }
}
