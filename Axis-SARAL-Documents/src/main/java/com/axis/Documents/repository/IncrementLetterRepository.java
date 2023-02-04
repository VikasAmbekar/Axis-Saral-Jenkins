package com.axis.Documents.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axis.Documents.entity.IncrementLetter;


@Repository
public interface IncrementLetterRepository extends CrudRepository<IncrementLetter, Long> {

}
