package com.example.btl_mobile_be.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.btl_mobile_be.model.entity.News;
import com.example.btl_mobile_be.model.service.NewsService;

import java.util.List;

@RestController
@RequestMapping("/news")
public class NewsController {

    @Autowired
    private NewsService newsService;

    @PostMapping("/create")
    public News createNews(@RequestBody News news) {
        return newsService.createNews(news);
    }

    @GetMapping
    public List<News> getAllNews() {
        return newsService.getAllNews();
    }

    @GetMapping("/{id}")
    public News getNewsById(@PathVariable int id) {
        return newsService.getNewsById(id);
    }

    @PutMapping("/{id}")
    public News updateNews(@PathVariable int id, @RequestBody News news) {
        return newsService.updateNews(id, news);
    }

    @DeleteMapping("/{id}")
    public boolean deleteNews(@PathVariable int id) {
        return newsService.deleteNews(id);
    }
}
