package org.sid.customerservice.web;

import org.sid.customerservice.entities.Customer;
import org.sid.customerservice.repositories.CustomerRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
//@RestController
@CrossOrigin("*")
public class customerRestController {

    private CustomerRepository customerRepository;

    public customerRestController(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @GetMapping("/customers")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<Customer>> getCustomers(){
        List<Customer> result = customerRepository.findAll();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
