package com.practice.library.dto;

import jakarta.persistence.Embeddable;
import lombok.Data;

import java.time.LocalDate;

@Data
@Embeddable
public class BookDetails {

    private String isbn;

    private LocalDate publishedDate;

    private int numberOfPage;
}
