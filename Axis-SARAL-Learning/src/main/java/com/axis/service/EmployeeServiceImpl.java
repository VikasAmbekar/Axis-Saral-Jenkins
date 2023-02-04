package com.axis.service;

import com.axis.entity.Employee;
import com.axis.exception.EmployeeNotFoundException;
import com.axis.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;


    @Override
    public Employee getEmployeeById(String employeeId) {
        Optional<Employee> employeeOptional = employeeRepository.findById(employeeId);
        if ((!employeeOptional.isPresent())) {
            throw new EmployeeNotFoundException("Employee not found with Id " + employeeId);
        }
        return employeeOptional.get();
    }

    @Override
    public List<Employee> getAllEmployee() {
        return (List<Employee>) employeeRepository.findAll();
    }

    @Override
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }

    @Override
    public void updateEmployee(String employeeId, Employee employee) {
        employeeRepository.save(employee);
    }

    @Override
    public void deleteEmployee(String employeeId) {
        employeeRepository.deleteById(employeeId);
    }
}
