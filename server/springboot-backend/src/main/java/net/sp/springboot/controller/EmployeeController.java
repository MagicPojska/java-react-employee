package net.sp.springboot.controller;

import net.sp.springboot.exception.ResourceNotFoundException;
import net.sp.springboot.model.Employee;
import net.sp.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    //Get all employees from database
    @GetMapping
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    //Build create employee API
    @PostMapping("/post")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    //Build get employee by ID API
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee does not exis with id: " + id));
        return ResponseEntity.ok(employee);
    }

    //Build update employee API
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employeeDetails) {
        Employee updateEmployee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee does not exis with id: " + id));

        updateEmployee.setFirstName(employeeDetails.getFirstName());
        updateEmployee.setLastName(employeeDetails.getLastName());
        updateEmployee.setEmailId(employeeDetails.getEmailId());

        employeeRepository.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }
}
