package com.axis.service;

import com.axis.entity.Admin;
import com.axis.entity.AdminSecurity;
import com.axis.repository.AdminSecurityRepository;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AdminSecurityService implements UserDetailsService {

    @Autowired
    private AdminSecurityRepository adminSecurityRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        final Admin admin = adminSecurityRepository.findByEmailId(username);


        if( admin == null ){
            throw new UsernameNotFoundException("User name is not found");
        }else {
            return new AdminSecurity(admin);
        }
    }
}
