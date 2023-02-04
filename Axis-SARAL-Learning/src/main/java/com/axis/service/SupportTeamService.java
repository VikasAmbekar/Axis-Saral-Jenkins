package com.axis.service;

import com.axis.entity.SupportTeam;

import java.util.List;

public interface SupportTeamService {

    SupportTeam getSupportTeamMemberById(String employeeId);

    List<SupportTeam> getAllSupportTeamMembers();

    void addSupportTeamMember(SupportTeam supportTeam);

    void updateSupportTeamMember(String employeeId, SupportTeam supportTeam);

    void deleteSupportTeamMember(String employeeId);
}
