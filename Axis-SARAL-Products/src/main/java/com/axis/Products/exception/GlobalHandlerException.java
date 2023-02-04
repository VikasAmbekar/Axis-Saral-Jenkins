package com.axis.Products.exception;



import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;



@ControllerAdvice
public class GlobalHandlerException {
	  // Individual Exception Handlers
	  @ExceptionHandler(value = ProductNotFoundException.class)
	    public ResponseEntity<String> employeeNotFoundException(ProductNotFoundException ex) {
	        return new ResponseEntity<String>(ex.getMessage(), HttpStatus.NOT_FOUND);
	    }

    

}