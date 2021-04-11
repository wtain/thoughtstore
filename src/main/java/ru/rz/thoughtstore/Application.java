package ru.rz.thoughtstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "ru.rz.thoughtstore")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
