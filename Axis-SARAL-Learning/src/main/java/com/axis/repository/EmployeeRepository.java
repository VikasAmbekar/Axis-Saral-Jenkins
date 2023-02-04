package com.axis.repository;

import com.axis.entity.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface EmployeeRepository extends CrudRepository<Employee, String> {

}
