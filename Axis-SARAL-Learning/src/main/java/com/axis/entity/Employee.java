package com.axis.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import lombok.*;


import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Employee {
    @Id
    @Column(name = "Employee_ID", nullable=false)
    public String employeeId;
    @Column(name = "Employee_Name", nullable=false)
    public String employeeName;
    @Column(name = "Employee_EmailID", nullable=false)
    public String emailId;
    @Column(name = "Employee_MobileNo", nullable=false)
    public long mobileNo;
    @Column(name = "Employee_Designation", nullable=false)
    public String designation;
    @Column(name = "Employee_Password", nullable=false)
    public String password;
    @Column(name = "Employee_Project_ID", nullable=false)
    public String projectId;
    @Column(name = "Employee_Manager_ID", nullable=false)
    public String managerId;
    @Column(name = "Employee_Working_Status", nullable=false)
    public boolean workingStatus;

    @Column(name = "Employee_Profile", nullable=false)
    public String profile;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private Manager manager;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private Project project;


    public Employee() {
    }

    public Employee(String employeeId, String employeeName, String emailId, long mobileNo, String designation, String password, String projectId, String managerId, boolean workingStatus, String profile, Manager manager, Project project) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.emailId = emailId;
        this.mobileNo = mobileNo;
        this.designation = designation;
        this.password = password;
        this.projectId = projectId;
        this.managerId = managerId;
        this.workingStatus = workingStatus;
        this.profile = profile;
        this.manager = manager;
        this.project = project;
    }


    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public long getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(long mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }

    public String getManagerId() {
        return managerId;
    }

    public void setManagerId(String managerId) {
        this.managerId = managerId;
    }

    public boolean isWorkingStatus() {
        return workingStatus;
    }

    public void setWorkingStatus(boolean workingStatus) {
        this.workingStatus = workingStatus;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public Manager getManager() {
        return manager;
    }

    public void setManager(Manager manager) {
        this.manager = manager;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "employeeId='" + employeeId + '\'' +
                ", employeeName='" + employeeName + '\'' +
                ", emailId='" + emailId + '\'' +
                ", mobileNo=" + mobileNo +
                ", designation='" + designation + '\'' +
                ", password='" + password + '\'' +
                ", projectId='" + projectId + '\'' +
                ", managerId='" + managerId + '\'' +
                ", workingStatus=" + workingStatus +
                ", profile='" + profile + '\'' +
                ", manager=" + manager +
                ", project=" + project +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Employee employee)) return false;
        return getEmployeeId().equals(employee.getEmployeeId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getEmployeeId());
    }
}
