package com.example.btl_mobile_be.model.service;

import com.example.btl_mobile_be.model.entity.User;

public interface UserService {
    User createUser(User user);
    User updateUser(int id, User user);
    User getUserById(int id);
    boolean deleteUser(int id); 
    User loginUser(User user);
}
