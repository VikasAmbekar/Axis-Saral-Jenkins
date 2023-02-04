package com.axis.Products.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.axis.Products.entity.Products;
import com.axis.Products.service.ProductService;

@RestController
@CrossOrigin("http://localhost:3000/")
public class ProductController {
	@Autowired
	private ProductService productService;
	
	@GetMapping("/products")
	 public List<Products> getAllProducts(){
        return productService.getAllProducts();
	 }
	@GetMapping("/product/{productId}")
	public Products getProductById(@PathVariable Long productId){
        return productService.getProductById(productId);
    }
	@PostMapping("/product/add")
	public ResponseEntity<String> addProducts(@RequestBody Products products){
		productService.addProducts(products);
        return new ResponseEntity<String>("Product is added successfully.", HttpStatus.OK);
	
	
	}
	@PutMapping("/product/update/{productId}")
	public ResponseEntity<String> updateProduct(@PathVariable Long productId, @RequestBody Products products){
		productService.updateProduct(productId, products);
        return new ResponseEntity<String> ("Product with  Id: "+ productId +" is updated Successfully.", HttpStatus.OK);
	
	}
	@DeleteMapping("/product/delete/{productId}")
	 public ResponseEntity<String> deleteProduct(@PathVariable Long productId){
		productService.deleteProductById(productId);
        return new ResponseEntity<String>("Product with Id: "+ productId +"is deleted Successfully.", HttpStatus.OK);
	
	}

}