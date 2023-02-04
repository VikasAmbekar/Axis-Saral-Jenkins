package com.axis.Documents.exception;

public class IncrementLetterNotFoundException  extends RuntimeException{
	 private static final long serialVersionUID = -151L;

	    public IncrementLetterNotFoundException() {
	        super();
	    }

	    public IncrementLetterNotFoundException(String message) {
	        super(message);
	    }

}
