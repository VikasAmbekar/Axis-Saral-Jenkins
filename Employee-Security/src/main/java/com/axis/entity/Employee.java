package com.axis.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@EqualsAndHashCode
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

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private Manager manager;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private Project project;
}
