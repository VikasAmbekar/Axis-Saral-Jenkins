package com.axis.Documents.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;

import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class SupportTeam {
    @Id
    @Column(name = "Employee_ID", nullable = false)
    private String employeeId;
    @Column(name = "Employee_NAME", nullable = false)
    private String employeeName;
    @Column(name = "Employee_Email_ID", nullable = false)
    private String emailId;
    @Column(name = "Employee_MobileNO", nullable = false)
    private Long mobileNo;
    @Column(name = "Employee_Designation", nullable = false)
    private String designation;
    @Column(name = "Employee_Password", nullable = false)
    private String password;

    public SupportTeam() {
    }

    public SupportTeam(String employeeId, String employeeName, String emailId, Long mobileNo, String designation, String password) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.emailId = emailId;
        this.mobileNo = mobileNo;
        this.designation = designation;
        this.password = password;
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

    public Long getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(Long mobileNo) {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof SupportTeam that)) return false;
        return getEmployeeId().equals(that.getEmployeeId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getEmployeeId());
    }
}
