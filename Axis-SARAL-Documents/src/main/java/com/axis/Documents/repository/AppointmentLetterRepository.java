package com.axis.Documents.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.axis.Documents.entity.AppointmentLetter;

@Repository
public interface AppointmentLetterRepository extends CrudRepository<AppointmentLetter, Long> {
}