package com.axis.service;

import com.axis.entity.Stakeholder;
import com.axis.exception.OpportunitiesNotFoundException;
import com.axis.exception.StakeHolderNotFoundException;
import com.axis.repository.StakeholderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StakeholderServiceImpl implements StakeholderService{

    @Autowired
    private StakeholderRepository stakeholderRepository;

    @Override
    public Stakeholder getStakeHolderById(String stakeholderId) {
       Optional<Stakeholder> stakeholderOptional = stakeholderRepository.findById(stakeholderId);
       if(!stakeholderOptional.isPresent()){
           throw new StakeHolderNotFoundException("Stakeholder not found with Id: "+stakeholderId);
       }
       return stakeholderOptional.get();
    }

    @Override
    public List<Stakeholder> getAllStakes() {
        return (List<Stakeholder>) stakeholderRepository.findAll();
    }

    @Override
    public void addStakeHolder(Stakeholder stakeholder) {
            stakeholderRepository.save(stakeholder);
    }

    @Override
    public void updateStakeHolder(String stakeholderId, Stakeholder stakeholder) {
        stakeholderRepository.save(stakeholder);
    }

    @Override
    public void deleteStakeHolder(String stakeholderId) {
        stakeholderRepository.deleteById(stakeholderId);
    }
}
