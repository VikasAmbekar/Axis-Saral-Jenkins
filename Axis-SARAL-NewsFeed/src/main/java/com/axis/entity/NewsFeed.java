package com.axis.entity;

import javax.persistence.*;


import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


@Entity
public class NewsFeed {
    @Id
    @Column(name = "news_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long newsFeedId;

    @Column(name = "news_name", length = 100, nullable = false)
    private String newsName;
    private String newsImageUrl;

    private String newsDescription;

    @OneToMany(mappedBy = "newsFeed",cascade = CascadeType.ALL)
    private List<Comment> comments;

    public NewsFeed() {
    }

    public NewsFeed(long newsFeedId, String newsName, String newsImageUrl, String newsDescription, List<com.axis.entity.Comment> comments) {
        this.newsFeedId = newsFeedId;
        this.newsName = newsName;
        this.newsImageUrl = newsImageUrl;
        this.newsDescription = newsDescription;
        this.comments = comments;
    }

    public long getNewsFeedId() {
        return newsFeedId;
    }

    public void setNewsFeedId(long newsFeedId) {
        this.newsFeedId = newsFeedId;
    }

    public String getNewsName() {
        return newsName;
    }

    public void setNewsName(String newsName) {
        this.newsName = newsName;
    }

    public String getNewsImageUrl() {
        return newsImageUrl;
    }

    public void setNewsImageUrl(String newsImageUrl) {
        this.newsImageUrl = newsImageUrl;
    }

    public String getNewsDescription() {
        return newsDescription;
    }

    public void setNewsDescription(String newsDescription) {
        this.newsDescription = newsDescription;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    @Override
    public String toString() {
        return "NewsFeed{" +
                "newsFeedId=" + newsFeedId +
                ", newsName='" + newsName + '\'' +
                ", newsImageUrl='" + newsImageUrl + '\'' +
                ", newsDescription='" + newsDescription + '\'' +
                ", comments=" + comments +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof NewsFeed newsFeed)) return false;
        return getNewsFeedId() == newsFeed.getNewsFeedId();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getNewsFeedId());
    }
}
