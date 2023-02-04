package com.axis.Documents.service;

import java.util.List;
import com.axis.Documents.entity.IncrementLetter;

public interface  IncrementLetterService {
	 IncrementLetter getIncrementLetterById(Long incrementId);
	 List<IncrementLetter > getAllIncrementLetter();
	 void addIncrementLetter(IncrementLetter  incrementLetter);
	 void updateIncrementLetter(Long incrementId, IncrementLetter  incrementLetter);
	 void deleteIncrementLetter(Long incrementId);

}
