package com.axis.Products.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.Products.entity.Products;
import com.axis.Products.exception.ProductNotFoundException;
import com.axis.Products.repository.ProductsRepository;
@Service
public class ProductsServiceImpl implements ProductService {
	
	@Autowired
	private ProductsRepository productsRepository;

	@Override
	public Products getProductById(Long productId) {
		Optional<Products>productsOptional = productsRepository.findById(productId);
        if ((!productsOptional.isPresent())) {
        	throw new ProductNotFoundException("Product not found with Id " + productId);
        }
        return productsOptional.get();
	}

	@Override
	public List<Products> getAllProducts() {
		return (List<Products>) productsRepository.findAll();
	}

	@Override
	public void addProducts(Products products) {
		// TODO Auto-generated method stub
		productsRepository.save(products);
		
	}

	@Override
	public void updateProduct(Long productId, Products products) {
		// TODO Auto-generated method stub
		productsRepository.save(products);
		
	}

	@Override
	public void deleteProductById(Long productId) {
		// TODO Auto-generated method stub
		productsRepository.deleteById(productId);
	}

}
