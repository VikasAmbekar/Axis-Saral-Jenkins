package com.axis.service;

import com.axis.entity.Project;

import java.util.List;

public interface ProjectService {

    Project getProjectById(String projectId);
    List<Project> getAllProjects();
    void addProject(Project project);
    void updateProject(String projectId, Project project);

    void deleteProject(String projectId);
}

