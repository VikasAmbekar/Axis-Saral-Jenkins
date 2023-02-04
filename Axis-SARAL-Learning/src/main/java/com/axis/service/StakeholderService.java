package com.axis.service;

import com.axis.entity.Stakeholder;

import java.util.List;

public interface StakeholderService {

    Stakeholder getStakeHolderById(String stakeholderId);
    List<Stakeholder> getAllStakes();
    void addStakeHolder(Stakeholder stakeholder);
    void updateStakeHolder(String stakeholderId, Stakeholder stakeholder);
    void deleteStakeHolder(String stakeholderId);
}
