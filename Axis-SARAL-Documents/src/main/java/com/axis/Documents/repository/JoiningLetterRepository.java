package com.axis.Documents.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axis.Documents.entity.JoiningLetter;

@Repository
public interface JoiningLetterRepository extends CrudRepository<JoiningLetter, Long> {

}
