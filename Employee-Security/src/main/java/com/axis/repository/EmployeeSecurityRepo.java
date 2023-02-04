package com.axis.repository;

import com.axis.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeSecurityRepo extends JpaRepository<Employee, String> {
    public Employee findByEmailId(String emailId);
}
