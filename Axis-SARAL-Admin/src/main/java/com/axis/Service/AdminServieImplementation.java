package com.axis.Service;

import com.axis.entity.Admin;
import com.axis.repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminServieImplementation implements AdminService{

    @Autowired
    private AdminRepo arepo;

    @Override
    public List<Admin> getAllAdmin() {
        return (List<Admin>) arepo.findAll();
    }

    @Override
    public Optional<Admin> getAdminByMobileNo(long mobileNo) {
        return arepo.findById(mobileNo);
    }

    @Override
    public void saveAdmin(Admin admin) {
    arepo.save(admin);
    }

    @Override
    public void updateAdmin(Admin admin, long mobileNo) {
    arepo.save(admin);
    }

    @Override
    public void deleteAdminByMobileNo(long mobileNo) {
    arepo.deleteById(mobileNo);
    }
}
