package com.ig.comment.controllers;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ig.comment.models.Comment;
import com.ig.comment.repository.CommentRepository;


@RestController
public class ComentController {
    
	@Autowired
	private CommentRepository repository;

	@PostMapping("/addComment")
	public Optional<Comment> saveBook(@RequestBody Comment comment) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd");  
        LocalDateTime now = LocalDateTime.now();  

        comment.setDate(dtf.format(now).toString());
        comment.setId(repository.findAll().size() + 1);
        comment.setComment(comment.getComment());

		repository.save(comment);

	    System.out.println(comment.getId());
		return repository.findById(comment.getId());
	}

	@GetMapping("/findAllComment")
	public List<Comment> getBooks() {
		return repository.findAll();
	}

	@GetMapping("/findAllComment/{id}")
	public Optional<Comment> getBook(@PathVariable int id) {
        // @PathVariable is req.params in node.js
		return repository.findById(id);
	}

	@DeleteMapping("/delete/{id}")
	public String deleteBook(@PathVariable int id) {
		repository.deleteById(id);
		return "book deleted with id : " + id;
	}

}

