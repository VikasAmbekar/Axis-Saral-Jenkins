package com.axis.Documents.entity;

import java.time.LocalDate;

import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonFormat;
import javax.persistence.*;
@Entity
public class SalarySlip {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long salaryId;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	@Column(name = "current_date", nullable=false)
	private LocalDate currentDate;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	@Column(name = "month_date", nullable=false)
	private LocalDate monthDate;
	@Column(name = "salary_amount", nullable=false)
	private long salaryAmount;
	@Column(name = "basic_pay", nullable=false)
	private long basicPay;
	@Column(name = "allowance", nullable=false)
	private long allowance;
	@Column(name = "pf Contribution", nullable=false)
	private long pfContribution;
	@Column(name = "location_pay", nullable=false)
	private long locationPay;
	@Column(name = "benefits_pay", nullable=false)
	private long benefitsPay;
	@Column(name = "Employee_ID", nullable=false)
	private String employeeId;
	
	
	public SalarySlip() {
	}

	public SalarySlip(LocalDate currentDate, LocalDate monthDate, long salaryAmount, long basicPay, long allowance, long pfContribution, long locationPay, long benefitsPay, String employeeId) {
		this.currentDate = currentDate;
		this.monthDate = monthDate;
		this.salaryAmount = salaryAmount;
		this.basicPay = basicPay;
		this.allowance = allowance;
		this.pfContribution = pfContribution;
		this.locationPay = locationPay;
		this.benefitsPay = benefitsPay;
		this.employeeId = employeeId;
	}

	public long getSalaryId() {
		return salaryId;
	}

	public void setSalaryId(long salaryId) {
		this.salaryId = salaryId;
	}

	public LocalDate getCurrentDate() {
		return currentDate;
	}

	public void setCurrentDate(LocalDate currentDate) {
		this.currentDate = currentDate;
	}

	public LocalDate getMonthDate() {
		return monthDate;
	}

	public void setMonthDate(LocalDate monthDate) {
		this.monthDate = monthDate;
	}

	public long getSalaryAmount() {
		return salaryAmount;
	}

	public void setSalaryAmount(long salaryAmount) {
		this.salaryAmount = salaryAmount;
	}

	public long getBasicPay() {
		return basicPay;
	}

	public void setBasicPay(long basicPay) {
		this.basicPay = basicPay;
	}

	public long getAllowance() {
		return allowance;
	}

	public void setAllowance(long allowance) {
		this.allowance = allowance;
	}

	public long getPfContribution() {
		return pfContribution;
	}

	public void setPfContribution(long pfContribution) {
		this.pfContribution = pfContribution;
	}

	public long getLocationPay() {
		return locationPay;
	}

	public void setLocationPay(long locationPay) {
		this.locationPay = locationPay;
	}

	public long getBenefitsPay() {
		return benefitsPay;
	}

	public void setBenefitsPay(long benefitsPay) {
		this.benefitsPay = benefitsPay;
	}

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	@Override
	public String toString() {
		return "SalarySlip{" +
				"salaryId=" + salaryId +
				", currentDate=" + currentDate +
				", monthDate=" + monthDate +
				", salaryAmount=" + salaryAmount +
				", basicPay=" + basicPay +
				", allowance=" + allowance +
				", pfContribution=" + pfContribution +
				", locationPay=" + locationPay +
				", benefitsPay=" + benefitsPay +
				", employeeId='" + employeeId + '\'' +
				'}';
	}


	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (!(o instanceof SalarySlip that)) return false;
		return getSalaryId() == that.getSalaryId();
	}

	@Override
	public int hashCode() {
		return Objects.hash(getSalaryId());
	}
}
