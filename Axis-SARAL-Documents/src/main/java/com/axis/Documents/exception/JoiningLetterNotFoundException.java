package com.axis.Documents.exception;

public class JoiningLetterNotFoundException extends RuntimeException {
	private static final long serialVersionUID = -252L;

    public JoiningLetterNotFoundException() {
        super();
    }

    public JoiningLetterNotFoundException(String message) {
        super(message);
    }

}
