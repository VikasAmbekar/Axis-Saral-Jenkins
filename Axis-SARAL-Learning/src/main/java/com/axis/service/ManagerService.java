package com.axis.service;

import com.axis.entity.Manager;

import java.util.List;

public interface ManagerService {

    Manager getManagerById(String managerId);

    List<Manager> getAllManagers();

    void addManager(Manager manager);

    void updateManager(String managerId, Manager manager);

    void deleteManager(String managerId);

}
