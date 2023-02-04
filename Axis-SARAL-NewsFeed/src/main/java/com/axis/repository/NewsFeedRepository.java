package com.axis.repository;


import com.axis.entity.NewsFeed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository

public interface NewsFeedRepository extends JpaRepository<NewsFeed, Long>{

}