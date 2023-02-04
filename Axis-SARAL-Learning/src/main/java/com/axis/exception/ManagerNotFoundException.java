package com.axis.exception;

public class ManagerNotFoundException extends RuntimeException{
    private static final long serialVersionUID = -160L;

    public ManagerNotFoundException() {
        super();
    }

    public ManagerNotFoundException(String message) {
        super(message);
    }
}
