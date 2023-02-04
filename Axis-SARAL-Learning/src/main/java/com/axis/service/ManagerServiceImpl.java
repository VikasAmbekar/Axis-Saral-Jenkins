package com.axis.service;

import com.axis.entity.Manager;
import com.axis.exception.ManagerNotFoundException;
import com.axis.repository.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ManagerServiceImpl implements ManagerService {

    @Autowired
    private ManagerRepository managerRepository;

    @Override
    public Manager getManagerById(String managerId) {

       Optional<Manager> managerOptional =  managerRepository.findById(managerId);
       if(!managerOptional.isPresent()){
           throw new ManagerNotFoundException("Manager not found with Id: "+managerId);
       }
       return managerOptional.get();
    }

    @Override
    public List<Manager> getAllManagers() {
        return (List<Manager>) managerRepository.findAll();
    }

    @Override
    public void addManager(Manager manager) {
        managerRepository.save(manager);
    }

    @Override
    public void updateManager(String managerId, Manager manager) {
        managerRepository.save(manager);
    }

    @Override
    public void deleteManager(String managerId) {
        managerRepository.deleteById(managerId);
    }
}
