package com.axis.Documents.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class GlobalHandlerException {
	  // Individual Exception Handlers

    @ExceptionHandler(value = SalarySlipNotFoundException.class)
    public ResponseEntity<String> employeeNotFoundException(SalarySlipNotFoundException ex) {
        return new ResponseEntity<String>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = IncrementLetterNotFoundException.class)
    public ResponseEntity<String> managerNotFoundException(IncrementLetterNotFoundException ex) {
        return new ResponseEntity<String>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = JoiningLetterNotFoundException.class)
    public ResponseEntity<String> projectNotFoundException(JoiningLetterNotFoundException ex) {
        return new ResponseEntity<String>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = AppointmentLetterNotFoundException.class)
    public ResponseEntity<String> opportunitiesNotFoundException(AppointmentLetterNotFoundException ex) {
        return new ResponseEntity<String>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

}
