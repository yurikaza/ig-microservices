package com.ig.commentReplay.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ig.commentReplay.models.Comment;

public interface CommentRepository extends MongoRepository<Comment, Integer>{
    
}

