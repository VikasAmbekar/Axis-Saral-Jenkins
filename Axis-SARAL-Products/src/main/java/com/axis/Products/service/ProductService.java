package com.axis.Products.service;

import java.util.List;

import com.axis.Products.entity.Products;

public interface ProductService {
	Products getProductById(Long productId);
	 List<Products> getAllProducts();
	 void addProducts(Products products);
	 void updateProduct(Long productId, Products products);
	 void deleteProductById(Long productId);

}
