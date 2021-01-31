package com.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.server.entities.Order;
 
public interface OrderRepository extends  JpaRepository<Order, Long>{
	
}
