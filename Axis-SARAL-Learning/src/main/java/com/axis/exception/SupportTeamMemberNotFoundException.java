package com.axis.exception;

public class SupportTeamMemberNotFoundException extends RuntimeException{
    private static final long serialVersionUID = -190L;

    public SupportTeamMemberNotFoundException() {
        super();
    }

    public SupportTeamMemberNotFoundException(String message) {
        super(message);
    }
}
