package com.axis.exception;

public class OpportunitiesNotFoundException extends RuntimeException{
    private static final long serialVersionUID = -170L;

    public OpportunitiesNotFoundException() {
        super();
    }

    public OpportunitiesNotFoundException(String message) {
        super(message);
    }
}
