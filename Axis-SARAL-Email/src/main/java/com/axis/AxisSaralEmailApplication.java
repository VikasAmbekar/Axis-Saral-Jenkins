package com.axis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class AxisSaralEmailApplication {

	public static void main(String[] args) {
		SpringApplication.run(AxisSaralEmailApplication.class, args);
	}

}
