package com.axis.Documents.service;

import java.util.List;
import com.axis.Documents.entity.AppointmentLetter;

public interface AppointmentLetterService {
	 AppointmentLetter getAppointmentLetterById(Long appointId);
	 List<AppointmentLetter> getAllAppointmentLetter();
	 void addAppointmentLetter(AppointmentLetter appointmentLetter);
	 void updateAppointmentLetter(Long appointId, AppointmentLetter appointmentLetter);
	 void deleteAppointmentLetter(Long appointId);

}
