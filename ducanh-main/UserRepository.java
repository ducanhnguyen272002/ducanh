package com.example.btl_mobile_be.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.btl_mobile_be.model.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
    User findByUsername(String username);

	User findByUsernameAndPassword(String username, String password);
}
