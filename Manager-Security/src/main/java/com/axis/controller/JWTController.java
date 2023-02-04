package com.axis.controller;

import com.axis.config.JWTUtil;
import com.axis.entity.JWTRequest;
import com.axis.entity.JWTResponse;
import com.axis.service.ManagerSecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class JWTController {

    @Autowired
    private ManagerSecurityService managerSecurityService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JWTUtil jwtUtil;

    @PostMapping("/manager-security-login")
    public ResponseEntity<?> managerToken(@RequestBody JWTRequest jwtRequest) throws Exception{
        try{
            this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwtRequest.getUsername(),jwtRequest.getPassword()));
        }catch (UsernameNotFoundException e){
            System.out.println("Manager name is not found");
            throw new Exception("Manager name is not found");
        }catch (BadCredentialsException e){
            System.out.println("Bad Credentials");
            throw new Exception("Bad Credentials");
        }

        UserDetails userDetails = managerSecurityService.loadUserByUsername(jwtRequest.getUsername());

        String token = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new JWTResponse(token));
    }
}
