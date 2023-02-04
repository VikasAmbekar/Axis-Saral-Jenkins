package com.axis.payloads;

import lombok.*;

import java.util.Objects;


public class CommentDto {

    private Integer commentId;
    private String message;
    private String name;

    public CommentDto() {
    }

    public CommentDto(Integer commentId, String message, String name) {
        this.commentId = commentId;
        this.message = message;
        this.name = name;
    }

    public Integer getCommentId() {
        return commentId;
    }

    public void setCommentId(Integer commentId) {
        this.commentId = commentId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "CommentDto{" +
                "commentId=" + commentId +
                ", message='" + message + '\'' +
                ", name='" + name + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CommentDto that)) return false;
        return getCommentId().equals(that.getCommentId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getCommentId());
    }
}
