package com.practice.library.Pojos;

import lombok.Data;

@Data
public class BookResponse {

    private  Long id;

    private  String title;

    private  String authorName;

    private String publisherName;

    private String categoryName;

    private String isbn;

    private int numberOfPages;
}
