package com.zedStore.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zedStore.entity.Category;

public interface CategoryDAO extends JpaRepository<Category, String> {

}
