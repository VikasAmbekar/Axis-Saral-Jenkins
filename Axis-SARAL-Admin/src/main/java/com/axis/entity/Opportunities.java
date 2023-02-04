package com.axis.entity;

import javax.persistence.*;

import java.util.Objects;

@Entity
public class Opportunities {

    @Id
    @Column(name = "Project_Id", nullable = false)
    private String projectId;
    @Column(name = "Project_Designation", nullable = false)
    private String projectDesignation;
    @Column(name = "Project_Project_Name", nullable = false)
    private String projectDomain;
    @Column(name = "Project_Duration", nullable = false)
    private String projectDuration;
    @Column(name = "Project_Manager_Id", nullable = false)
    private String projectManagerId;
    @Column(name = "Salary", nullable = false)
    private Long salary;
    @Column(name = "Location", nullable = false)
    private String location;
    @Column(name = "Project_Description", nullable = false)
    private String description;

    public Opportunities() {
    }

    public Opportunities(String projectId, String projectDesignation, String projectDomain, String projectDuration, String projectManagerId, Long salary, String location, String description) {
        this.projectId = projectId;
        this.projectDesignation = projectDesignation;
        this.projectDomain = projectDomain;
        this.projectDuration = projectDuration;
        this.projectManagerId = projectManagerId;
        this.salary = salary;
        this.location = location;
        this.description = description;
    }

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }

    public String getProjectDesignation() {
        return projectDesignation;
    }

    public void setProjectDesignation(String projectDesignation) {
        this.projectDesignation = projectDesignation;
    }

    public String getProjectDomain() {
        return projectDomain;
    }

    public void setProjectDomain(String projectDomain) {
        this.projectDomain = projectDomain;
    }

    public String getProjectDuration() {
        return projectDuration;
    }

    public void setProjectDuration(String projectDuration) {
        this.projectDuration = projectDuration;
    }

    public String getProjectManagerId() {
        return projectManagerId;
    }

    public void setProjectManagerId(String projectManagerId) {
        this.projectManagerId = projectManagerId;
    }

    public Long getSalary() {
        return salary;
    }

    public void setSalary(Long salary) {
        this.salary = salary;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Opportunities that)) return false;
        return getProjectId().equals(that.getProjectId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getProjectId());
    }
}
