package com.axis.exception;

public class ProjectNotFoundException extends RuntimeException{
    private static final long serialVersionUID = -170L;

    public ProjectNotFoundException() {
        super();
    }

    public ProjectNotFoundException(String message) {
        super(message);
    }
}
