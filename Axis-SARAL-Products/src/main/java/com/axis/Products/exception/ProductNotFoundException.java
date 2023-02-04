package com.axis.Products.exception;

public class ProductNotFoundException extends RuntimeException {
	  private static final long serialVersionUID = -250L;
	  
	  
	  public ProductNotFoundException() {
	        super();
	    }

	    public ProductNotFoundException(String message) {
	        super(message);
	    }
	  

}