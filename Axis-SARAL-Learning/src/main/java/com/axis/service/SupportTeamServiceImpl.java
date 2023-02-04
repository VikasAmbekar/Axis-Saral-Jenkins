package com.axis.service;

import com.axis.entity.SupportTeam;
import com.axis.exception.StakeHolderNotFoundException;
import com.axis.exception.SupportTeamMemberNotFoundException;
import com.axis.repository.SupportTeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SupportTeamServiceImpl implements SupportTeamService{
    @Autowired
    private SupportTeamRepository supportTeamRepository;

    @Override
    public SupportTeam getSupportTeamMemberById(String employeeId) {
        Optional<SupportTeam> supportTeamOptional = supportTeamRepository.findById(employeeId);
        if(!supportTeamOptional.isPresent()){
            throw new SupportTeamMemberNotFoundException("SupportTeamMember not found with Id: "+employeeId);
        }
        return supportTeamOptional.get();
    }

    @Override
    public List<SupportTeam> getAllSupportTeamMembers() {
        return (List<SupportTeam>) supportTeamRepository.findAll();
    }

    @Override
    public void addSupportTeamMember(SupportTeam supportTeam) {
        supportTeamRepository.save(supportTeam);
    }

    @Override
    public void updateSupportTeamMember(String employeeId, SupportTeam supportTeam) {
        supportTeamRepository.save(supportTeam);
    }

    @Override
    public void deleteSupportTeamMember(String employeeId) {
        supportTeamRepository.deleteById(employeeId);
    }
}
