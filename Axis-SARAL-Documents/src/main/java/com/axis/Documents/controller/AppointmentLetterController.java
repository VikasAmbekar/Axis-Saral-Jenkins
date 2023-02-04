package com.axis.Documents.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.axis.Documents.entity.AppointmentLetter;
import com.axis.Documents.service.AppointmentLetterService;


@RestController
@CrossOrigin("http://localhost:3000/")
public class AppointmentLetterController {
	@Autowired
	private AppointmentLetterService appointmentLetterService;
	
	@GetMapping("/appointments")
	 public List<AppointmentLetter> getAllAppointmentLetter(){
        return appointmentLetterService.getAllAppointmentLetter();
	 }
	@GetMapping("/appointment/{appointId}")
	public AppointmentLetter getAppointmentLetterById(@PathVariable Long appointId){
        return appointmentLetterService.getAppointmentLetterById(appointId);
    }
	@PostMapping("/appointment/add")
	public ResponseEntity<String> addAppointmentLetter(@RequestBody AppointmentLetter appointmentLetter){
		appointmentLetterService.addAppointmentLetter(appointmentLetter);
        return new ResponseEntity<String>("Appointment Letter is added successfully.", HttpStatus.OK);
	
	
	}
	@PutMapping("/appointment/update/{appointId}")
	public ResponseEntity<String> updateAppointmentLetter(@PathVariable Long appointId, @RequestBody AppointmentLetter appointmentLetter){
		appointmentLetterService.updateAppointmentLetter(appointId, appointmentLetter);
        return new ResponseEntity<String> ("Appointment Id: "+ appointId +" is updated Successfully.", HttpStatus.OK);
	
	}
	@DeleteMapping("/appointment/delete/{appointId}")
	 public ResponseEntity<String> deleteAppointmentLetterr(@PathVariable Long appointId){
		appointmentLetterService.deleteAppointmentLetter(appointId);
        return new ResponseEntity<String>("Appointment Id: "+ appointId +"is deleted Successfully.", HttpStatus.OK);
	
	}

}
