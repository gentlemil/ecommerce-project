package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {

    // queryMethod matched by category id using 'id' parameter
    Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);
    // sth like: SELECT * FROM product where category_id=?
    // Spring Data REST automacically exposes endpoind
    // http://localost:8070/api/products/search/findByCategoryId?id=2

    // search method
    Page<Product> findByNameContaining(@RequestParam("name") String name, Pageable pageable);
    // sth like: SELECT * FROM Product WHERE p.name LIKE CONCAT('%', :name, '%')
    // http://localhost:8070/api/products/search/findByNameContaining?name=JavaScript
}
