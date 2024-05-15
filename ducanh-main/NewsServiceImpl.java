package com.example.btl_mobile_be.model.serviceImpl;

import com.example.btl_mobile_be.model.entity.News;
import com.example.btl_mobile_be.repository.NewsRepository;
import com.example.btl_mobile_be.model.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NewsServiceImpl implements NewsService {

    @Autowired
    private NewsRepository newsRepository;

    @Override
    public News createNews(News news) {
        return newsRepository.save(news);
    }

    @Override
    public List<News> getAllNews() {
        return newsRepository.findAll();
    }

    @Override
    public News getNewsById(int id) {
        Optional<News> optionalNews = newsRepository.findById(id);
        return optionalNews.orElse(null);
    }

    @Override
    public News updateNews(int id, News news) {
        Optional<News> optionalNews = newsRepository.findById(id);
        if (optionalNews.isPresent()) {
            news.setId(id);
            return newsRepository.save(news);
        }
        return null;
    }

    @Override
    public boolean deleteNews(int id) {
        Optional<News> optionalNews = newsRepository.findById(id);
        if (optionalNews.isPresent()) {
            newsRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
