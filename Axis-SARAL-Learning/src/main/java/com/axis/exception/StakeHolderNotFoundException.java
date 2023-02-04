package com.axis.exception;

public class StakeHolderNotFoundException extends RuntimeException{
    private static final long serialVersionUID = -180L;

    public StakeHolderNotFoundException() {
        super();
    }

    public StakeHolderNotFoundException(String message) {
        super(message);
    }
}
