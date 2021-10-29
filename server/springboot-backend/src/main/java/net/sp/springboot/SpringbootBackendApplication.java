package net.sp.springboot;

import net.sp.springboot.model.Employee;
import net.sp.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
		Employee employee = new Employee();
		employee.setFirstName("Safet");
		employee.setLastName("Pojskic");
		employee.setEmailId("test@gmail.com");
		employeeRepository.save(employee);

		Employee employee1 = new Employee();
		employee1.setFirstName("Meris");
		employee1.setLastName("Stupar");
		employee1.setEmailId("test@gmail.com");
		employeeRepository.save(employee1);

		Employee employee2 = new Employee();
		employee2.setFirstName("Ishak");
		employee2.setLastName("Smajic");
		employee2.setEmailId("test@gmail.com");
		employeeRepository.save(employee2);
	}
}
