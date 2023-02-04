package com.axis.Documents.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Project {
    @Id
    @Column(name = "Project_ID", nullable=false)
    private String projectId;
    @Column(name = "Project_Name", nullable=false)
    private String projectName;

    @Column(name = "Project_Manager_ID", nullable=false)
    public String managerId;

    @Column(name = "Project_Description", nullable=false)
    public String projectDescription;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn
    private List<Stakeholder> stakeholder;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn
    private List<SupportTeam> supportTeamList;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn
    private List<Manager> managerList;

    public Project() {
    }


    public Project(String projectId, String projectName, String managerId, String projectDescription, List<Stakeholder> stakeholder, List<SupportTeam> supportTeamList, List<Manager> managerList) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.managerId = managerId;
        this.projectDescription = projectDescription;
        this.stakeholder = stakeholder;
        this.supportTeamList = supportTeamList;
        this.managerList = managerList;
    }

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getManagerId() {
        return managerId;
    }

    public void setManagerId(String managerId) {
        this.managerId = managerId;
    }

    public String getProjectDescription() {
        return projectDescription;
    }

    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }

    public List<Stakeholder> getStakeholder() {
        return stakeholder;
    }

    public void setStakeholder(List<Stakeholder> stakeholder) {
        this.stakeholder = stakeholder;
    }

    public List<SupportTeam> getSupportTeamList() {
        return supportTeamList;
    }

    public void setSupportTeamList(List<SupportTeam> supportTeamList) {
        this.supportTeamList = supportTeamList;
    }

    public List<Manager> getManagerList() {
        return managerList;
    }

    public void setManagerList(List<Manager> managerList) {
        this.managerList = managerList;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Project project)) return false;
        return getProjectId().equals(project.getProjectId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getProjectId());
    }
}

