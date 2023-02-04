package com.axis.Documents.service;

import java.util.List;

import com.axis.Documents.entity.JoiningLetter;

public interface JoiningLetterService {
	JoiningLetter getJoiningLetterById(Long joiningId);
	 List<JoiningLetter> getAllJoiningLetter();
	 void addJoiningLetter(JoiningLetter joiningLetter);
	 void updateJoiningLetter(Long joiningId, JoiningLetter joiningLetter);
	 void deleteJoiningLetter(Long joiningId);

}
