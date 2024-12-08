package com.practice.learning.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/versioning")
public class MyVersioningController {

    @GetMapping("/v1/uri-path")
    public String uriPathVersioning1(){
        return "uri-path-1";
    }

    @GetMapping("/v2/uri-path")
    public String uriPathVersioning2(){
        return "uri-path-2";
    }

    @GetMapping(value = "/custom-header", headers = {"x-api-version=1"})
    public String customHeaderVersioning1(){
        return "custom-header-1";
    }

    @GetMapping(value = "/custom-header", headers = {"x-api-version=2"})
    public String customHeaderVersioning2(){
        return "custom-header-2";
    }

    @GetMapping(value = "/content-negotiation", produces = {"application/version1+json"})
    public String contentNegotiationVersioning1(){
        return "content-negotiation-1";
    }

    @GetMapping(value = "/content-negotiation", produces = {"application/version2+json"})
    public String contentNegotiationVersioning2(){
        return "content-negotiation-2";
    }

    @GetMapping(value = "/query-parameter", params = {"version=1"})
    public String queryParameterVersioning1(){
        return "query-parameter-1";
    }

    @GetMapping(value = "/query-parameter", params = {"version=2"})
    public String queryParameterVersioning2(){
        return "query-parameter-2";
    }

}
