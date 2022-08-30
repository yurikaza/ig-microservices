package com.ig.comment.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection = "Comment")
public class Comment {
    
    
   @Id 
   private int id;

   private String comment;
   
   private String date; 
}
