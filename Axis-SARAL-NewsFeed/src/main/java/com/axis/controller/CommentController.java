package com.axis.controller;


import com.axis.entity.Comment;
import com.axis.payloads.CommentDto;
import com.axis.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000/")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/news/{newsFeedId}/comment/add")
    public ResponseEntity<CommentDto> createComment(@RequestBody CommentDto comment, @PathVariable Long newsFeedId){
        CommentDto createComment = this.commentService.createComment(comment, newsFeedId);
        return new ResponseEntity<CommentDto>(createComment, HttpStatus.CREATED);
    }

    @DeleteMapping("/comment/delete/{commentId}")
    public ResponseEntity<String> deleteComment(@PathVariable Integer commentId){
        commentService.deleteComment(commentId);
        return new ResponseEntity<>("Comment Deleted.", HttpStatus.OK);
    }
}
