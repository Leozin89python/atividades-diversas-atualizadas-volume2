package com.server.config;

import java.time.Instant;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.server.entities.Category;
import com.server.entities.Order;
import com.server.entities.OrderItem;
import com.server.entities.Payment;
import com.server.entities.Product;
import com.server.entities.User;
import com.server.entities.Enums.OrderStatus;
import com.server.repositories.CategoryRepository;
import com.server.repositories.OrderItemRepository;
import com.server.repositories.OrderRepository;
import com.server.repositories.ProductRepository;
import com.server.repositories.UserRepository;


@Configuration
@Profile("test")
public class testConfig implements CommandLineRunner{
	
	@Autowired
	private UserRepository UserRepository;
	
	@Autowired
	private OrderRepository  OrderRepository;
	
	@Autowired
	private CategoryRepository CategoryRepository; 
	
	@Autowired
	private  ProductRepository ProductRepository;
	
	@Autowired
	private OrderItemRepository OrderItemRepository;

	public void run(String... args) throws Exception {
		
		Category cat1 = new Category(null, "Electronics");
		Category cat2 = new Category(null, "Books");
		Category cat3 = new Category(null, "Computers");
		
		Product p1 = new Product(null, "The Lord of the Rings", "Lorem ipsum dolor sit amet, consectetur.", 90.5, "");
		Product p2 = new Product(null, "Smart TV", "Nulla eu imperdiet purus. Maecenas ante.", 2190.0, "");
		Product p3 = new Product(null, "Macbook Pro", "Nam eleifend maximus tortor, at mollis.", 1250.0, "");
		Product p4 = new Product(null, "PC Gamer", "Donec aliquet odio ac rhoncus cursus.", 1200.0, "");
		Product p5 = new Product(null, "Rails for Dummies", "Cras fringilla convallis sem vel faucibus.", 100.99, ""); 
		
		
		CategoryRepository.saveAll(Arrays.asList(cat1,cat2,cat3));
		ProductRepository.saveAll(Arrays.asList(p1,p2,p3,p4,p5));
		
		p1.getCategories().add(cat2);
		p2.getCategories().add(cat1);
		p2.getCategories().add(cat3);
		p3.getCategories().add(cat3);
		p4.getCategories().add(cat3);
		p5.getCategories().add(cat2);
		
		
		ProductRepository.saveAll(	Arrays.asList(p1,p2,p3,p4,p5));
		
		User u1 = new User(null, "Maria Brown", "maria@gmail.com", "123456","988888888");
		User u2 = new User(null, "Alex Green", "alex@gmail.com",  "123456","977777777"); 
		
		
		Order o1 = new Order(null, Instant.parse("2019-06-20T19:53:07Z"),OrderStatus.paid,u1);
		Order o2 = new Order(null, Instant.parse("2019-07-21T03:42:10Z"),OrderStatus.waitting_payment, u2);
		Order o3 = new Order(null, Instant.parse("2019-07-22T15:21:22Z"),OrderStatus.delivered, u1);
		
		
		UserRepository.saveAll(Arrays.asList(u1,u2));
		OrderRepository.saveAll(Arrays.asList(o1,o2,o3));
		
		
		OrderItem oi1 = new OrderItem(o1, p1, 2, p1.getPrice());
		OrderItem oi2 = new OrderItem(o1, p3, 1, p3.getPrice());
		OrderItem oi3 = new OrderItem(o2, p3, 2, p3.getPrice());
		OrderItem oi4 = new OrderItem(o3, p5, 2, p5.getPrice()); 
		
		OrderItemRepository.saveAll(Arrays.asList(oi1,oi2,oi3,oi4));
		
		
		Payment pay1 = new Payment(null,Instant.parse("2019-06-20T21:53:07Z"), o1);
		o1.setPayment(pay1);
		
		
		OrderRepository.save(o1);
	}		
}
