package com.axis.service;

import com.axis.payloads.CommentDto;

public interface CommentService {

    // Creating Operation

    CommentDto createComment(CommentDto commentDto, Long newsFeedId);

    // Delete Operation
    void deleteComment(Integer commentId);

}
