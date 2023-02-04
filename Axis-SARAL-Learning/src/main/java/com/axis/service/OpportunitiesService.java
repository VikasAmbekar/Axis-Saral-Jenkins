package com.axis.service;

import com.axis.entity.Opportunities;

import java.util.List;

public interface OpportunitiesService {
    Opportunities getProjectById(String projectId);

    List<Opportunities> getAllProjects();

    void addProject(Opportunities opportunities);

    void updateProjectById(String projectId, Opportunities opportunities);

    void deleteProjectById(String projectId);
}
