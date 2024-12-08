package com.practice.library.dto;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import java.util.UUID;

@Data
@Entity
@Table(name="books")
@NamedQueries({
        @NamedQuery(
                name= "Book.findBooksByAuthor",
                query= "SELECT b FROM Book b WHERE b.author.name =: authorName"
        )
})
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID Id;

    private String title;

    @ManyToOne
    @JoinColumn(name="author_id")
    private Author author;

    @ManyToOne
    @JoinColumn(name = "publisher_id")
    private Publisher publisher;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @Embedded
    private BookDetails bookDetails;

    @Version
    private Long version;

}
