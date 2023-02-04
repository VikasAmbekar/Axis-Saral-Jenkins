package com.axis.service;

import com.axis.entity.Employee;

import java.util.List;

public interface EmployeeService {

    Employee getEmployeeById(String employeeId);

    List<Employee> getAllEmployee();

    void addEmployee(Employee employee);

    void updateEmployee(String employeeId, Employee employee);

    void deleteEmployee(String employeeId);

}

