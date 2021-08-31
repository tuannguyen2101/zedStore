package com.zedStore.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zedStore.entity.Role;

public interface RoleDAO extends JpaRepository<Role, String> {

}
