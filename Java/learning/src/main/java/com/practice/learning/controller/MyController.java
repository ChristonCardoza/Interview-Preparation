package com.practice.learning.controller;

import com.practice.learning.dto.MyTodo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.logging.Logger;

@Controller
@RequestMapping("/basic")
public class MyController {

    private static Logger LOGGER = Logger.getLogger(String.valueOf(MyController.class));

    List<MyTodo> todos = new ArrayList<>();

    @GetMapping(value ="/hello-world")
    @ResponseBody
    public Map<String, String> helloWorld() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello World");
        return response;
    }

    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    @ResponseBody
    public String hello(){
        return "Hello";
    }

    @GetMapping("/getAllTodos")
    @ResponseBody
    public List<MyTodo> getAllTodos(){
        return todos;
    }

    @PostMapping(value = "/createTodo")
    @ResponseBody
    public ResponseEntity<String> createTodo(@RequestBody MyTodo todo){
        todos.add(todo);
        return new ResponseEntity<>("Todo created successfully",HttpStatus.CREATED);
    }

    @GetMapping("/getTodo/{todoId}")
    @ResponseBody
    public ResponseEntity<MyTodo> getTodoById(@PathVariable UUID todoId){

        Optional<MyTodo> todo = todos.stream().filter(e -> e.getId().equals(todoId)).findFirst();

        return todo.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());

    }

    @GetMapping("/getTodosByStatus")
    @ResponseBody
    public ResponseEntity<List<MyTodo>> getTodosByStatus(@RequestParam boolean status) {
        List<MyTodo> myTodos = todos.stream().filter( e -> e.isCompleted() == status).toList();

        return ResponseEntity.ok(myTodos);
    }

    @PatchMapping("/changeStatus/{todoId}")
    @ResponseBody
    public ResponseEntity<MyTodo> changeStatus(@PathVariable UUID todoId, @RequestBody Map<String, Boolean> body){

        Optional<MyTodo> todo = todos.stream().filter(e -> e.getId().equals(todoId)).findFirst();

        if(todo.isEmpty()){
            return  ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        todo.get().setCompleted(body.get("status"));

        return ResponseEntity.ok(todo.get());
    }


    @PutMapping("/updateTodo/{todoId}")
    @ResponseBody
    public ResponseEntity<MyTodo> updateTodo(@PathVariable UUID todoId, @RequestBody MyTodo body){

        Optional<MyTodo> todo = todos.stream().filter(e -> e.getId().equals(todoId)).findFirst();

        if(todo.isEmpty()){
            return  ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        MyTodo temp = todo.get();
        temp.setCompleted(body.isCompleted());
        temp.setName(body.getName());
        temp.setDescription(body.getDescription());

        return ResponseEntity.ok(todo.get());
    }

    @DeleteMapping("/deleteTodo/{todoId}")
    @ResponseBody
    public ResponseEntity<String> deleteTodo(@PathVariable UUID todoId){

        Optional<MyTodo> todo = todos.stream().filter(e -> e.getId().equals(todoId)).findFirst();

        if(todo.isEmpty()){
            return  ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        MyTodo temp = todo.get();
        todos.remove(temp);

        return new ResponseEntity<>(HttpStatus.OK);
    }


}
