package com.practice.library.Pojos;

import lombok.Data;

import java.time.LocalDate;

@Data
public class BookRequest {

    private String title;

    private String authorName;

    private String publisherName;

    private String CategoryName;

    private String isbn;

    private LocalDate publishedDate;

    private int numberOfPages;
}
