package com.example.btl_mobile_be.model.service;

import com.example.btl_mobile_be.model.entity.News;

import java.util.List;

public interface NewsService {
    News createNews(News news);
    List<News> getAllNews();
    News getNewsById(int id);
    News updateNews(int id, News news);
    boolean deleteNews(int id);
}
