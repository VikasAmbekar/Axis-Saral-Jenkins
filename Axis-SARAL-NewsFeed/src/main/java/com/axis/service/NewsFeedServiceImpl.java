package com.axis.service;


import com.axis.entity.NewsFeed;
import com.axis.repository.NewsFeedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class NewsFeedServiceImpl implements NewsFeedService{

    @Autowired
    private NewsFeedRepository newsFeedRepository;

    @Override
    public NewsFeed getNewsById(long newsFeedId) {
        return newsFeedRepository.findById(newsFeedId).get();
    }

    @Override
    public List<NewsFeed> getAllNews() {
        return (List<NewsFeed>) newsFeedRepository.findAll();
    }

    @Override
    public void addNews(NewsFeed newsFeed) {
        newsFeedRepository.save(newsFeed);
    }

    @Override
    public void updateNews(long newsFeedId, NewsFeed newsFeed) {
        newsFeedRepository.save(newsFeed);
    }

    @Override
    public void deleteNews(long newsFeedId) {
        newsFeedRepository.deleteById(newsFeedId);
    }
}
