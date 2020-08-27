package nl.systemation.reactmvc.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 * @Author Jeffrey Spaan
 * @Company Systemation
 * @Created on Thursday, August 27th, 2020
 */

@Data // Lombok to create the Getters and Setters
@AllArgsConstructor // Lombok to create the All Args Constructor
@NoArgsConstructor // Lombok to create the No Args Constructor
@Entity // Spring Boot annotation to enable database persistence
@Table(name = "users") // Persist data into table with name users
public class User {

    @Id // Database table key is the ID
    @GeneratedValue(strategy = GenerationType.AUTO) // Create key value sequence and auto generate the identifier
    private Long id;

    private String firstName;

    private String lastName;

    private int age;

    private String email;

    @JsonIgnore // Ignore the password with JSON requests (security related)
    private String password;

}