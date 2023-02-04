package com.axis.controller;

import com.axis.entity.NewsFeed;
import com.axis.service.NewsFeedService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class NewsFeedController {

    @Autowired
    private NewsFeedService newsFeedService;

    @GetMapping("/news/{newsFeedId}")
    public NewsFeed getNewsById(
            @PathVariable long newsFeedId){
        return newsFeedService.getNewsById(newsFeedId);
    }

    @GetMapping("/news")
    public List<NewsFeed> getAllNews(){
        return newsFeedService.getAllNews();
    }

    @PostMapping("/news/add")
    public ResponseEntity<String> addNews(@RequestBody NewsFeed newsFeed){
        newsFeedService.addNews(newsFeed);
        return new ResponseEntity<>("News Added To DB.", HttpStatus.CREATED);
    }

    @PutMapping("/news/update/{newsFeedId}")
    public ResponseEntity<String> updateNews(@PathVariable long newsFeedId,@RequestBody NewsFeed newsFeed){
        newsFeedService.updateNews(newsFeedId, newsFeed);
        return new ResponseEntity<>("News Updated In DB.", HttpStatus.OK);
    }

    @DeleteMapping("/news/delete/{newsFeedId}")
    public ResponseEntity<String> deleteNews(@PathVariable long newsFeedId){
        newsFeedService.deleteNews(newsFeedId);
        return new ResponseEntity<>("News Deleted From DB.", HttpStatus.OK);
    }

}
