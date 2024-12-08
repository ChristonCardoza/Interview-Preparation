package com.practice.library.service;

import com.practice.library.Pojos.BookRequest;
import com.practice.library.dao.AuthorRepository;
import com.practice.library.dao.BookRepository;
import com.practice.library.dao.CategoryRepository;
import com.practice.library.dao.PublisherRepository;
import com.practice.library.dto.*;
import jakarta.persistence.OptimisticLockException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private AuthorRepository authorRepository;

    @Autowired
    private PublisherRepository publisherRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    @Transactional
    public Book createBook(BookRequest bookRequest) {
        Book book = new Book();
        book.setTitle(bookRequest.getTitle());

        // Find or create nested entities
        Author author = authorRepository.findByName(bookRequest.getAuthorName());
        if (author == null) {
            author = new Author();
            author.setName(bookRequest.getAuthorName());
            authorRepository.save(author);
        }
        book.setAuthor(author);

        Publisher publisher = publisherRepository.findByName(bookRequest.getPublisherName());
        if (publisher == null) {
            publisher = new Publisher();
            publisher.setName(bookRequest.getPublisherName());
            publisherRepository.save(publisher);
        }
        book.setPublisher(publisher);

        Category category = categoryRepository.findByName(bookRequest.getCategoryName());
        if (category == null) {
            category = new Category();
            category.setName(bookRequest.getCategoryName());
            categoryRepository.save(category);
        }
        book.setCategory(category);

        // Set book details
        BookDetails details = new BookDetails();
        details.setIsbn(bookRequest.getIsbn());
        details.setPublishedDate(bookRequest.getPublishedDate());
        details.setNumberOfPage(bookRequest.getNumberOfPages());
        book.setBookDetails(details);

        // Save the book
        return bookRepository.save(book);
    }


    public ResponseEntity<Book> getBookById( UUID id){

        return bookRepository.findById(id)
                .map(book -> ResponseEntity.ok(book))
                .orElse(ResponseEntity.notFound().build());
    }
//
//
//    public ResponseEntity<Book> updateBook(Long id, Book details){
//        return bookRepository.findById(id).
//                map( book -> {
//                    book.setTitle(details.getTitle());
//                    book.setAuthor(details.getAuthor());
//
//                    Book updatedBook = bookRepository.save(book);
//                    return ResponseEntity.ok(updatedBook);
//                }).orElse(ResponseEntity.notFound().build());
//    }
//
//
    public ResponseEntity<Object> deleteBook( UUID id){
        return bookRepository.findById(id).map(book -> {
            bookRepository.delete(book);
            return ResponseEntity.noContent().build();
        }).orElse(ResponseEntity.notFound().build());
    }

    @Transactional
    public void updateBookWithOptimisticLock(UUID bookId, String newTitle) {
        try {
            Book book = bookRepository.findById(bookId)
                    .orElseThrow(() -> new RuntimeException("Book not found"));
            book.setTitle(newTitle);

            // Save with optimistic locking
            bookRepository.save(book);
        } catch (OptimisticLockException e) {
            // Handle optimistic lock exception (e.g., retry or fail)
            throw new RuntimeException("Optimistic lock error: " + e.getMessage());
        }
    }

    @Transactional
    public void updateBookWithPessimisticLock(UUID bookId, String newTitle) {
        Book book = bookRepository.findBookWithPessimisticLock(bookId);
        book.setTitle(newTitle);

        // Save with pessimistic locking
        bookRepository.save(book);
    }
}
