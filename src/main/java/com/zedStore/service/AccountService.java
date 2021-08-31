package com.zedStore.service;

import java.util.List;

import com.zedStore.entity.Account;

public interface AccountService {

	Account findById(String username);

	List<Account> getAdministrators();

	List<Account> findAll();
}
