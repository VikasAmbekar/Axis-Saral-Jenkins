package com.axis.axiseureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class AxisEurekaApplication {

	public static void main(String[] args) {
		SpringApplication.run(AxisEurekaApplication.class, args);
	}

}
