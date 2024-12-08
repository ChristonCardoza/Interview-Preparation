package com.practice.library.dao;

import com.practice.library.dto.Book;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface BookRepository extends JpaRepository<Book, UUID> {

    // Custom Query
    @Query("SELECT b FROM Book b WHERE b.title = ?1")
    List<Book> findByTitle(String title);

    // Named Query
//    List<Book> findBookByAuthor(String authorName);

    // Pessimistic lock
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT b FROM Book b WHERE b.id = ?1")
    Book findBookWithPessimisticLock(UUID id);

}
