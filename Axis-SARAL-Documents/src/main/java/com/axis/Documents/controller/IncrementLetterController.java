package com.axis.Documents.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.axis.Documents.entity.IncrementLetter;
import com.axis.Documents.service.IncrementLetterService;

@RestController
@CrossOrigin("http://localhost:3000/")
public class IncrementLetterController {
	@Autowired
	private IncrementLetterService incrementLetterService;
	
	@GetMapping("/increments")
	 public List<IncrementLetter> getAllIncrementLetterp(){
        return incrementLetterService.getAllIncrementLetter();
	 }
	@GetMapping("/increment/{incrementId}")
	public IncrementLetter getSalarySlipById(@PathVariable Long incrementId){
        return incrementLetterService.getIncrementLetterById(incrementId);
    }
	@PostMapping("/increment/add")
	public ResponseEntity<String> addIncrementLetter(@RequestBody IncrementLetter incrementLetter){
		incrementLetterService.addIncrementLetter(incrementLetter);
        return new ResponseEntity<String>("Increment Letter is added successfully.", HttpStatus.OK);
	
	
	}
	@PutMapping("/increment/update/{incrementId}")
	public ResponseEntity<String> updateIncrementLetter(@PathVariable Long incrementId, @RequestBody IncrementLetter incrementLetter){
		incrementLetterService.updateIncrementLetter(incrementId, incrementLetter);
        return new ResponseEntity<String> ("Increment Id: "+ incrementId +" is updated Successfully.", HttpStatus.OK);
	
	}
	@DeleteMapping("/increment/delete/{incrementId}")
	 public ResponseEntity<String> deleteIncrementLetter(@PathVariable Long incrementId){
		incrementLetterService.deleteIncrementLetter(incrementId);
        return new ResponseEntity<String>("Increment Id: "+ incrementId +"is deleted Successfully.", HttpStatus.OK);
	
	}

}
