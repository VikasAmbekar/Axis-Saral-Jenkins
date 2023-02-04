package com.axis.Documents.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.Documents.entity.SalarySlip;
import com.axis.Documents.exception.SalarySlipNotFoundException;
import com.axis.Documents.repository.SalarySlipRepository;

@Service
public class SalarySlipServiceImpl implements SalarySlipService {

	 @Autowired
	    private SalarySlipRepository salarySlipRepository;

	@Override
	public SalarySlip getSalarySlipById(Long salaryId) {
		Optional<SalarySlip> salarySlipOptional = salarySlipRepository.findById(salaryId);
        if ((!salarySlipOptional.isPresent())) {
        	throw new SalarySlipNotFoundException("Salary Slip not found with Id " + salaryId);
        }
        return salarySlipOptional.get();
	}

	@Override
	public List<SalarySlip> getAllSalarySlip() {
		return (List<SalarySlip>) salarySlipRepository.findAll();
	}

	@Override
	public void addSalarySlip(SalarySlip salarySlip) {
		 salarySlipRepository.save(salarySlip);
		
	}

	@Override
	public void updateSalarySlip(Long salaryId, SalarySlip salarySlip) {
		salarySlipRepository.save(salarySlip);
		
	}

	@Override
	public void deleteSalarySlipId(Long salaryId) {
		salarySlipRepository.deleteById(salaryId);
		
	}

}
