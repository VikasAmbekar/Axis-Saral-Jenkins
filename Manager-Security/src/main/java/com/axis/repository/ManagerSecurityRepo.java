package com.axis.repository;


import com.axis.entity.Manager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ManagerSecurityRepo extends JpaRepository<Manager, String> {
    public Manager findByEmailId(String emailId);
}
