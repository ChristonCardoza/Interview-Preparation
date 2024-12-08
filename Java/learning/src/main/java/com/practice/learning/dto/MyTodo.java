package com.practice.learning.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class MyTodo {

    private UUID id = UUID.randomUUID();

    private String name;

    private String description;

    private boolean completed;
}
