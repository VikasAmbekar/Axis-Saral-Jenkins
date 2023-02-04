package com.axis.Documents.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.Documents.entity.JoiningLetter;

import com.axis.Documents.exception.JoiningLetterNotFoundException;
import com.axis.Documents.repository.JoiningLetterRepository;
@Service
public class JoiningLetterServiceImpl implements JoiningLetterService{
	
	@Autowired
	private JoiningLetterRepository joiningLetterRepository;

	@Override
	public JoiningLetter getJoiningLetterById(Long joiningId) {
		Optional<JoiningLetter> joiningLetterOptional = joiningLetterRepository.findById(joiningId);
        if ((!joiningLetterOptional.isPresent())) {
        	throw new JoiningLetterNotFoundException("Joining Letter not found with Id " + joiningId);
        }
        return joiningLetterOptional.get();
	}
	

	@Override
	public List<JoiningLetter> getAllJoiningLetter() {
		return(List<JoiningLetter>) joiningLetterRepository.findAll();
	}

	@Override
	public void addJoiningLetter(JoiningLetter joiningLetter) {
		joiningLetterRepository.save(joiningLetter);
		
	}

	@Override
	public void updateJoiningLetter(Long joiningId, JoiningLetter joiningLetter) {
		joiningLetterRepository.save(joiningLetter);
		
	}

	@Override
	public void deleteJoiningLetter(Long joiningId) {
		joiningLetterRepository.deleteById(joiningId);;
		
	}

}
