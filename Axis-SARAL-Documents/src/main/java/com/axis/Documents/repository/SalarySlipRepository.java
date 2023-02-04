package com.axis.Documents.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axis.Documents.entity.SalarySlip;

@Repository
public interface SalarySlipRepository extends CrudRepository<SalarySlip, Long> {
}
