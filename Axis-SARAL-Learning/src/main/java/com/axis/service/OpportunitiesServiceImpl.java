package com.axis.service;

import com.axis.entity.Opportunities;
import com.axis.exception.OpportunitiesNotFoundException;
import com.axis.repository.OpportunitiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OpportunitiesServiceImpl implements OpportunitiesService {

    @Autowired
    private OpportunitiesRepository opportunitiesRepository;

    @Override
    public Opportunities getProjectById(String projectId) {
        Optional<Opportunities> opportunitiesOptional = opportunitiesRepository.findById(projectId);
        if (!opportunitiesOptional.isPresent()){
            throw new OpportunitiesNotFoundException("Opportunities not found with Id: "+projectId);
        }
        return opportunitiesOptional.get();
    }

    @Override
    public List<Opportunities> getAllProjects() {
        return (List<Opportunities>) opportunitiesRepository.findAll();
    }

    @Override
    public void addProject(Opportunities opportunities) {
        opportunitiesRepository.save(opportunities);

    }

    @Override
    public void updateProjectById(String projectId, Opportunities opportunities) {
        opportunitiesRepository.save(opportunities);

    }

    @Override
    public void deleteProjectById(String projectId) {
        opportunitiesRepository.deleteById(projectId);

    }
}
