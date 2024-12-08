package com.practice.library.controller;

import com.practice.library.Pojos.BookRequest;
import com.practice.library.dto.Book;
import com.practice.library.service.BookService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/library")
public class LibraryController {

    @Autowired
    private BookService bookService;


    @GetMapping("/books")
    public List<Book> getAllBooks(){
        return bookService.getAllBooks();
    }

    @PostMapping("/books")
    @Transactional
    public Book createBook(@RequestBody BookRequest book){
        return bookService.createBook(book);
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable UUID id){
        return bookService.getBookById(id);
    }
//
//    @PutMapping("/books/{id}")
//    public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book details){
//        return bookService.updateBook(id, details);
//    }
//
    @DeleteMapping("/books/{id}")
    public ResponseEntity<Object> deleteBook(@PathVariable UUID id){
        return bookService.deleteBook(id);
    }

}
