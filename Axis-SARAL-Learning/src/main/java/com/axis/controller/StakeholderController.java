package com.axis.controller;

import com.axis.entity.Stakeholder;
import com.axis.service.StakeholderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StakeholderController {

    @Autowired
    private StakeholderService stakeholderService;

    @GetMapping("/stakeholders")
    public List<Stakeholder> getAllStakes(){
        return stakeholderService.getAllStakes();
    }

    @GetMapping("/stakeholder/{stakeholderId}")
    public Stakeholder getStakeHolderById(@PathVariable String stakeholderId){
        return stakeholderService.getStakeHolderById(stakeholderId);
    }

    @PostMapping("/stakeholder/add")
    public ResponseEntity<String> addStakeHolder(@RequestBody Stakeholder stakeholder){
        stakeholderService.addStakeHolder(stakeholder);
        return new ResponseEntity<>("Stakeholder added successfully.", HttpStatus.CREATED);
    }

    @PutMapping("/stakeholder/update/{stakeholderId}")
    public ResponseEntity<String> updateStakeHolder(@PathVariable String stakeholderId,@RequestBody Stakeholder stakeholder){
        stakeholderService.updateStakeHolder(stakeholderId, stakeholder);
        return new ResponseEntity<>("Stakeholder with Id: "+stakeholderId+ " updated successfully.", HttpStatus.OK);
    }

    @DeleteMapping("/stakeholder/delete/{stakeholderId}")
    public ResponseEntity<String> deleteStakeHolder(@PathVariable String stakeholderId) {
        stakeholderService.deleteStakeHolder(stakeholderId);
        return new ResponseEntity<>("Stakeholder with Id: " + stakeholderId + " deleted successfully.", HttpStatus.OK);
    }
}
