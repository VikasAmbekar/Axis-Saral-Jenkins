package com.axis.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Admin {
    @Id
    private long mobileNo;
    private String name;
    private String emailId;
    private String password;


    public Admin() {
    }

    public Admin(long mobileNo, String name, String emailId, String password) {
        this.mobileNo = mobileNo;
        this.name = name;
        this.emailId = emailId;
        this.password = password;
    }

    public long getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(long mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    @Override
    public String toString() {
        return "Admin{" +
                "mobileNo=" + mobileNo +
                ", name='" + name + '\'' +
                ", emailId='" + emailId + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Admin admin)) return false;
        return getMobileNo() == admin.getMobileNo();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getMobileNo());
    }
}
