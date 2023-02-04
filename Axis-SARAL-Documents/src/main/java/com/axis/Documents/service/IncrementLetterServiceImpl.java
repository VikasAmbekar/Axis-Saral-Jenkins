package com.axis.Documents.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.axis.Documents.entity.IncrementLetter;
import com.axis.Documents.exception.IncrementLetterNotFoundException;
import com.axis.Documents.repository.IncrementLetterRepository;

@Service
public class IncrementLetterServiceImpl implements IncrementLetterService{
	 @Autowired
	    private IncrementLetterRepository incrementLetterRepository;

	@Override
	public IncrementLetter getIncrementLetterById(Long incrementId) {
		Optional<IncrementLetter> incrementLetterOptional = incrementLetterRepository.findById(incrementId);
        if ((!incrementLetterOptional.isPresent())) {
        	throw new IncrementLetterNotFoundException("increment letter not found with Id " + incrementId);
        }
        return incrementLetterOptional.get();
	}
	

	@Override
	public List<IncrementLetter> getAllIncrementLetter() {
		return (List<IncrementLetter>) incrementLetterRepository.findAll();
	}

	@Override
	public void addIncrementLetter(IncrementLetter incrementLetter) {
		incrementLetterRepository.save(incrementLetter);
		
	}

	@Override
	public void updateIncrementLetter(Long incrementId, IncrementLetter incrementLetter) {
		incrementLetterRepository.save(incrementLetter);
		
	}

	@Override
	public void deleteIncrementLetter(Long incrementId) {
		incrementLetterRepository.deleteById(incrementId);
		
	}

}
