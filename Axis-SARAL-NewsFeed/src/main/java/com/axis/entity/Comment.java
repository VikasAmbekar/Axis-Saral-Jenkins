package com.axis.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;


import java.util.Objects;


@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int commentId;

    @Column(name = "message")
    private String message;

    @Column(name = "name")
    private String name;

    @JsonIgnore
    @ManyToOne()
    @JoinColumn(name = "news_feed_id", referencedColumnName = "news_id")
    private NewsFeed newsFeed;

    public Comment() {
    }

    public Comment(int commentId, String message, String name, NewsFeed newsFeed) {
        this.commentId = commentId;
        this.message = message;
        this.name = name;
        this.newsFeed = newsFeed;
    }

    public int getCommentId() {
        return commentId;
    }

    public void setCommentId(int commentId) {
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

    public NewsFeed getNewsFeed() {
        return newsFeed;
    }

    public void setNewsFeed(NewsFeed newsFeed) {
        this.newsFeed = newsFeed;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "commentId=" + commentId +
                ", message='" + message + '\'' +
                ", name='" + name + '\'' +
                ", newsFeed=" + newsFeed +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Comment comment)) return false;
        return getCommentId() == comment.getCommentId();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getCommentId());
    }
}
