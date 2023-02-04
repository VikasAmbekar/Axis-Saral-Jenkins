package com.axis.Documents.exception;

public class SalarySlipNotFoundException extends RuntimeException {
	  private static final long serialVersionUID = -251L;
	  
	  
	  public SalarySlipNotFoundException() {
	        super();
	    }

	    public SalarySlipNotFoundException(String message) {
	        super(message);
	    }
	  

}
