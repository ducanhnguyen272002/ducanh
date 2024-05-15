package com.example.btl_mobile_be.repository;
import com.example.btl_mobile_be.model.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepository extends JpaRepository<News, Integer> {
    // Các phương thức tùy chỉnh có thể được thêm ở đây nếu cần thiết
}
