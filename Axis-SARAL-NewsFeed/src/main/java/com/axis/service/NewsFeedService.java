package com.axis.service;


import com.axis.entity.NewsFeed;

import java.util.List;

public interface NewsFeedService {
    NewsFeed getNewsById(long newsFeedId);
    List<NewsFeed> getAllNews();

    abstract void addNews(NewsFeed newsFeed);
    void updateNews(long newsFeedId, NewsFeed newsFeed);
    void deleteNews(long newsFeedId);
}
