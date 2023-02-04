package com.axis.exception;

public class EmployeeNotFoundException extends RuntimeException{
    private static final long serialVersionUID = -150L;

    public EmployeeNotFoundException() {
        super();
    }

    public EmployeeNotFoundException(String message) {
        super(message);
    }
}
