package com.axis.Documents.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.axis.Documents.entity.JoiningLetter;

import com.axis.Documents.service.JoiningLetterService;

@RestController
@CrossOrigin("http://localhost:3000/")
public class JoiningLetterController {
	@Autowired
	private JoiningLetterService joiningLetterService;
	
	@GetMapping("/joiningLetters")
	public List<JoiningLetter> getAllJoinigLetter(){
        return joiningLetterService.getAllJoiningLetter();
	 }
	@GetMapping("/joiningLetter/{joiningId}")
	public JoiningLetter getJoiningLetterById(@PathVariable Long joiningId){
        return joiningLetterService.getJoiningLetterById(joiningId);
    }
	@PostMapping("/joiningLetter/add")
	public ResponseEntity<String> add(@RequestBody JoiningLetter joiningLetter){
        joiningLetterService.addJoiningLetter(joiningLetter);
        return new ResponseEntity<String>("Joining Letter is added successfully.", HttpStatus.OK);
	
	
	}
	@PutMapping("/joiningLetter/update/{joiningId}")
	public ResponseEntity<String> updateJoiningLetter(@PathVariable Long joiningId, @RequestBody JoiningLetter joiningLetter){
		joiningLetterService.updateJoiningLetter(joiningId, joiningLetter);
        return new ResponseEntity<String> ("Joining letter with Id: "+ joiningId +" is updated Successfully.", HttpStatus.OK);
	
	}
	@DeleteMapping("joiningletter/delete/{joiningId}")
	 public ResponseEntity<String> deleteJoiningLetter(@PathVariable Long joiningId){
		joiningLetterService.deleteJoiningLetter(joiningId);
        return new ResponseEntity<String>("Joining letter with Id: "+ joiningId +"is deleted Successfully.", HttpStatus.OK);
	
	}


}
