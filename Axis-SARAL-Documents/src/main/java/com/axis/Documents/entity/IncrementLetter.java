package com.axis.Documents.entity;

import java.time.LocalDate;

import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
@Entity
public class IncrementLetter {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long incrementId;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	@Column(name = "current_date", nullable=false)
	private LocalDate currentDate;
	@Column(name = "Month", nullable=false)
	private String month;
	@Column(name = "Increment_percent", nullable=false)
	private double incrementPercent;
	@Column(name = "Employee_ID", nullable=false)
	private String employeeId;
	
	public IncrementLetter() {
	}

	public IncrementLetter(LocalDate currentDate, String month, double incrementPercent, String employeeId) {
		this.currentDate = currentDate;
		this.month = month;
		this.incrementPercent = incrementPercent;
		this.employeeId = employeeId;
	}

	public long getIncrementId() {
		return incrementId;
	}

	public void setIncrementId(long incrementId) {
		this.incrementId = incrementId;
	}

	public LocalDate getCurrentDate() {
		return currentDate;
	}

	public void setCurrentDate(LocalDate currentDate) {
		this.currentDate = currentDate;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public double getIncrementPercent() {
		return incrementPercent;
	}

	public void setIncrementPercent(double incrementPercent) {
		this.incrementPercent = incrementPercent;
	}

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	@Override
	public String toString() {
		return "IncrementLetter{" +
				"incrementId=" + incrementId +
				", currentDate=" + currentDate +
				", month='" + month + '\'' +
				", incrementPercent=" + incrementPercent +
				", employeeId='" + employeeId + '\'' +
				'}';
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (!(o instanceof IncrementLetter that)) return false;
		return getIncrementId() == that.getIncrementId();
	}

	@Override
	public int hashCode() {
		return Objects.hash(getIncrementId());
	}
}
