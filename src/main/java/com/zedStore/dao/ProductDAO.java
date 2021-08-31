package com.zedStore.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zedStore.entity.Product;

public interface ProductDAO extends JpaRepository<Product, Integer> {
	List<Product> findByCategoryId(String cid);
}
