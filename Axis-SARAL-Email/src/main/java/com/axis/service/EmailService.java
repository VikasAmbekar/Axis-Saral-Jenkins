package com.axis.service;

import com.axis.entity.EmailDetails;

public interface EmailService {


    String sendSimpleMail(EmailDetails details);
    String sendMailWithAttachment(EmailDetails details);



}