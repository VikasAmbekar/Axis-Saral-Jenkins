package com.axis.service;

import com.axis.entity.Comment;
import com.axis.entity.NewsFeed;
import com.axis.payloads.CommentDto;
import com.axis.repository.CommentRepository;


import com.axis.repository.NewsFeedRepository;
import com.netflix.discovery.converters.Auto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

@Service
public class CommentServiceImpl implements CommentService{

    @Autowired
    private CommentRepository commentRepository;


    @Autowired
    private NewsFeedRepository newsFeedRepository;


    @Autowired
    private ModelMapper modelMapper;




    @Override
    public CommentDto createComment(CommentDto commentDto, Long newsFeedId) {

        NewsFeed newsFeed = this.newsFeedRepository.findById(newsFeedId).get();

        Comment comment = this.modelMapper.map(commentDto, Comment.class);

        comment.setNewsFeed(newsFeed);

        Comment savedComment = this.commentRepository.save(comment);

        return this.modelMapper.map(savedComment, CommentDto.class);
    }

    @Override
    public void deleteComment(Integer commentId) {
        Comment com = this.commentRepository.findById(commentId).get();
        this.commentRepository.delete(com);
    }
}
