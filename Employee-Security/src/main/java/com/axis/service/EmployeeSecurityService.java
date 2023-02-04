package com.axis.service;

import com.axis.entity.Employee;
import com.axis.entity.EmployeeDetails;
import com.axis.repository.EmployeeSecurityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class EmployeeSecurityService implements UserDetailsService {

    @Autowired
    private EmployeeSecurityRepo employeeSecurityRepo;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        final Employee employee = employeeSecurityRepo.findByEmailId(username);


        if( employee == null ){
            throw new UsernameNotFoundException("User name is not found");
        }else {
            return new EmployeeDetails(employee);
        }

    }
}
