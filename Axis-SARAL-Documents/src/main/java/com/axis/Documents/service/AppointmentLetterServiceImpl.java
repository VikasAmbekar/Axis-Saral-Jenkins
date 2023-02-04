package com.axis.Documents.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.Documents.entity.AppointmentLetter;

import com.axis.Documents.exception.AppointmentLetterNotFoundException;

import com.axis.Documents.repository.AppointmentLetterRepository;
@Service
public class AppointmentLetterServiceImpl implements AppointmentLetterService  {
	@Autowired
    private AppointmentLetterRepository appointmentLetterRepository;
	
	

	@Override
	public AppointmentLetter getAppointmentLetterById(Long appointId) {
		Optional<AppointmentLetter> appointmentLetterOptional = appointmentLetterRepository.findById(appointId);
        if ((!appointmentLetterOptional.isPresent())) {
        	throw new AppointmentLetterNotFoundException("Appointment letter not found with Id " + appointId);
        }
            
        
        return appointmentLetterOptional.get();
	}

	@Override
	public List<AppointmentLetter> getAllAppointmentLetter() {
		return (List<AppointmentLetter>) appointmentLetterRepository.findAll();
	}

	@Override
	public void addAppointmentLetter(AppointmentLetter appointmentLetter) {
		appointmentLetterRepository.save(appointmentLetter);
		
	}

	@Override
	public void updateAppointmentLetter(Long appointId, AppointmentLetter appointmentLetter) {
		appointmentLetterRepository.save(appointmentLetter);
		
	}

	@Override
	public void deleteAppointmentLetter(Long appointId) {
		appointmentLetterRepository.deleteById(appointId);
		
	}

}
