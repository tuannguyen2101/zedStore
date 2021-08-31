package com.zedStore.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zedStore.entity.OrderDetail;

public interface OrderDetailDAO extends JpaRepository<OrderDetail, Long> {

}
