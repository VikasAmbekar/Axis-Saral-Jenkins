package com.axis.entity;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class JWTRequest {

    private String username;
    private String password;
}
