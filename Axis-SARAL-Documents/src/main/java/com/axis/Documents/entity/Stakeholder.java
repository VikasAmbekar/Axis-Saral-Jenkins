package com.axis.Documents.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;

import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Stakeholder {
    @Id
    @Column(name = "StakeHolder_ID", nullable = false)
    private String stakeholderId;
    @Column(name = "StakeHolder_Name", nullable = false)
    private String stakeholderName;
    @Column(name = "StakeHolder_Email", nullable = false)
    private String stakeholderEmail;
    @Column(name = "StakeHolder_MobileNo", nullable = false)
    private Long stakeholderMobileNo;
    @Column(name = "StakeHolder_Position", nullable = false)
    private String stakeholderPosition;

    public Stakeholder() {
    }

    public Stakeholder(String stakeholderId, String stakeholderName, String stakeholderEmail, Long stakeholderMobileNo, String stakeholderPosition) {
        this.stakeholderId = stakeholderId;
        this.stakeholderName = stakeholderName;
        this.stakeholderEmail = stakeholderEmail;
        this.stakeholderMobileNo = stakeholderMobileNo;
        this.stakeholderPosition = stakeholderPosition;
    }

    public String getStakeholderId() {
        return stakeholderId;
    }

    public void setStakeholderId(String stakeholderId) {
        this.stakeholderId = stakeholderId;
    }

    public String getStakeholderName() {
        return stakeholderName;
    }

    public void setStakeholderName(String stakeholderName) {
        this.stakeholderName = stakeholderName;
    }

    public String getStakeholderEmail() {
        return stakeholderEmail;
    }

    public void setStakeholderEmail(String stakeholderEmail) {
        this.stakeholderEmail = stakeholderEmail;
    }

    public Long getStakeholderMobileNo() {
        return stakeholderMobileNo;
    }

    public void setStakeholderMobileNo(Long stakeholderMobileNo) {
        this.stakeholderMobileNo = stakeholderMobileNo;
    }

    public String getStakeholderPosition() {
        return stakeholderPosition;
    }

    public void setStakeholderPosition(String stakeholderPosition) {
        this.stakeholderPosition = stakeholderPosition;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Stakeholder that)) return false;
        return getStakeholderId().equals(that.getStakeholderId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getStakeholderId());
    }
}