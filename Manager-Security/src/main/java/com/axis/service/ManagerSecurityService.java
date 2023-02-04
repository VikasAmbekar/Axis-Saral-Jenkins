package com.axis.service;

import com.axis.entity.Manager;
import com.axis.entity.ManagerSecurity;
import com.axis.repository.ManagerSecurityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class ManagerSecurityService implements UserDetailsService {

    @Autowired
    private ManagerSecurityRepo managerSecurityRepo;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        final Manager manager =managerSecurityRepo.findByEmailId(username);

        if(manager == null){
            throw new UsernameNotFoundException("User Name is not found.");
        }else{
            return new ManagerSecurity(manager);
        }
    }
}
