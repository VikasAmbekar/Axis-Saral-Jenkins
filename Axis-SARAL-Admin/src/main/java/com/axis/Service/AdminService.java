package com.axis.Service;

import com.axis.entity.Admin;

import java.util.List;
import java.util.Optional;

public interface AdminService {

    List<Admin> getAllAdmin();

    Optional<Admin> getAdminByMobileNo(long mobileNo);

    void saveAdmin(Admin admin);

    void updateAdmin(Admin admin,long mobileNo);

    void deleteAdminByMobileNo(long mobileNo);
}
