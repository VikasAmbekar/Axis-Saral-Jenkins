package com.axis.Documents.entity;

import java.time.LocalDate;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonFormat;
import javax.persistence.*;

@Entity
public class AppointmentLetter {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long appointId;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	@Column(name = "current_date", nullable=false)
	private LocalDate currentDate;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	@Column(name = "appointment_date", nullable=false)
	private LocalDate appointmentDate;
	@Column(name = "employee_id", nullable=false)
	private String employeeId;

	public AppointmentLetter() {
	}

	public AppointmentLetter(long appointId, LocalDate currentDate, LocalDate appointmentDate, String employeeId) {
		this.appointId = appointId;
		this.currentDate = currentDate;
		this.appointmentDate = appointmentDate;
		this.employeeId = employeeId;
	}

	public long getAppointId() {
		return appointId;
	}

	public void setAppointId(long appointId) {
		this.appointId = appointId;
	}

	public LocalDate getCurrentDate() {
		return currentDate;
	}

	public void setCurrentDate(LocalDate currentDate) {
		this.currentDate = currentDate;
	}

	public LocalDate getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(LocalDate appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	@Override
	public String toString() {
		return "AppointmentLetter{" +
				"appointId=" + appointId +
				", currentDate=" + currentDate +
				", appointmentDate=" + appointmentDate +
				", employeeId='" + employeeId + '\'' +
				'}';
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (!(o instanceof AppointmentLetter that)) return false;
		return getAppointId() == that.getAppointId();
	}

	@Override
	public int hashCode() {
		return Objects.hash(getAppointId());
	}
}
