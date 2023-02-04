package com.axis.Documents.service;

import java.util.List;

import com.axis.Documents.entity.SalarySlip;

public interface SalarySlipService {
	 SalarySlip getSalarySlipById(Long salaryId);
	 List<SalarySlip> getAllSalarySlip();
	 void addSalarySlip(SalarySlip salarySlip);
	 void updateSalarySlip(Long salaryId, SalarySlip salarySlip);
	 void deleteSalarySlipId(Long salaryId);

}
