package com.axis.Products.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.axis.Products.entity.Products;

@Repository
public interface ProductsRepository extends CrudRepository<Products, Long> {
}