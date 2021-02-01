package com.devsuperior.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.DTO.OrderDTO;
import com.devsuperior.dsdeliver.DTO.ProductDTO;
import com.devsuperior.dsdeliver.Enum.OrderStatus;
import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repository.OrderRepository;
import com.devsuperior.dsdeliver.repository.ProductRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repositoy;
	
	@Autowired
	private ProductRepository productRepositoy;
	
	@Transactional(readOnly = true)
	public List <OrderDTO> findAll(){
		List<Order> list = repositoy.findOrdersWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(),
				dto.getLongitude(), Instant.now(), OrderStatus.PENDING);
		for(ProductDTO p: dto.getProducts()) {
			Product product = productRepositoy.getOne(p.getId());
			order.getProducts().add(product);
		}
		
		order = repositoy.save(order);
		return new OrderDTO(order);
	}
}
