package com.devsuperior.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.DTO.OrderDTO;
import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.repository.OrderRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repositoy;
	
	@Transactional(readOnly = true)
	public List <OrderDTO> findAll(){
		List<Order> list = repositoy.findAll();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
}
