package com.axis.Documents.entity;

import java.time.LocalDate;

import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
@Entity
public class JoiningLetter {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long joiningId;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	@Column(name = "date_of_joining", nullable=false)
	private LocalDate dateOfJoining;
	@Column(name = "Employee_Id", nullable=false)
	private String employeeId;
	
	
	public JoiningLetter() {
	}

	public JoiningLetter(LocalDate dateOfJoining, String employeeId) {
		this.dateOfJoining = dateOfJoining;
		this.employeeId = employeeId;
	}

	public long getJoiningId() {
		return joiningId;
	}

	public void setJoiningId(long joiningId) {
		this.joiningId = joiningId;
	}

	public LocalDate getDateOfJoining() {
		return dateOfJoining;
	}

	public void setDateOfJoining(LocalDate dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	@Override
	public String toString() {
		return "JoiningLetter{" +
				"joiningId=" + joiningId +
				", dateOfJoining=" + dateOfJoining +
				", employeeId='" + employeeId + '\'' +
				'}';
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (!(o instanceof JoiningLetter that)) return false;
		return getJoiningId() == that.getJoiningId();
	}

	@Override
	public int hashCode() {
		return Objects.hash(getJoiningId());
	}
}
