package net.sp.springboot.repository;

import net.sp.springboot.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    //CRUD DATABASE METHODS
}