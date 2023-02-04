package com.axis.repository;

import com.axis.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminSecurityRepository extends JpaRepository<Admin, Long> {
    public Admin findByEmailId(String emailId);
}
