package com.axis.config;


import com.axis.service.EmployeeSecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.ExceptionHandlingConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.ws.rs.HttpMethod;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private EmployeeSecurityService employeeSecurityService;

    @Autowired
    private SecurityFilter securityFilter;

    @Autowired
    private SecurityEntryPoint securityEntryPoint;


//    @Bean
//    public ExceptionHandlingConfigurer<HttpSecurity> securityFilterChain(HttpSecurity http) throws Exception {
//        http.addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class);
//        return  http.csrf()
//                .disable()
//                .cors()
//                .disable()
//                .authorizeRequests()
//                .requestMatchers("/employee-security-login")
//                .permitAll()
//                .anyRequest()
//                .authenticated()
//                .and()
//                .sessionManagement()
//                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                .and()
//                .exceptionHandling()
//                .authenticationEntryPoint(securityEntryPoint);
//
//    }


    protected void configure(HttpSecurity http) throws Exception {
                         http.csrf()
                        .disable()
                        .cors()
                        .disable()
                        .authorizeRequests()
                        .antMatchers("/employee-security-login")
                        .permitAll()
                        .antMatchers(HttpMethod.OPTIONS)
                        .permitAll().anyRequest().authenticated().and().sessionManagement()
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                        .and().exceptionHandling()
                        .authenticationEntryPoint(securityEntryPoint);
                         http.addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class);}

            @Override
            protected void configure(AuthenticationManagerBuilder auth) throws Exception {
                 auth.userDetailsService(employeeSecurityService);
            }
            @Bean
            public PasswordEncoder passwordEncoder() {
            return NoOpPasswordEncoder.getInstance();
            }



//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return NoOpPasswordEncoder.getInstance();
//    }
//
//    @Bean
//    public AuthenticationProvider authenticationProvider(){
//        DaoAuthenticationProvider authenticationProvider=new DaoAuthenticationProvider();
//        authenticationProvider.setUserDetailsService(employeeSecurityService);
//        authenticationProvider.setPasswordEncoder(passwordEncoder());
//        return authenticationProvider;
//    }

      @Bean
       public AuthenticationManager authenticationManagerBean() throws Exception {
     return super.authenticationManagerBean();
     }

}
