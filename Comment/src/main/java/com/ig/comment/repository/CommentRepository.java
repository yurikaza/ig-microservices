package com.ig.comment.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ig.comment.models.Comment;

public interface CommentRepository extends MongoRepository<Comment, Integer>{
    
}

