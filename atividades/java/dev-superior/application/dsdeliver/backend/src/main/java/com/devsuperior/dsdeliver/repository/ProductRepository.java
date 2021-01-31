package com.devsuperior.dsdeliver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devsuperior.dsdeliver.entities.Product;


public interface ProductRepository extends JpaRepository<Product, Long>{

}
