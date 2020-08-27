# Spring Boot React MVC Example
*Created on: 27-08-2020*<br />
*Last updated on: 27-08-2020*

**Contributors:**<br />
Jeffrey Spaan *(Solution Consultant @ Systemation, the Netherlands)*

Welcome developer. This is the first step in developing a **Web Application with Spring Boot and React**.<br />
In this tutorial we will cover the basics in full stack development and setup a **Spring Boot back-end** with a **React front-end**.

### What is Spring Boot?
**Spring Boot** is a Java-Based framework used, and not limited to, creating micro service applications.<br />
Configuring the back-end of your application is easier than ever with the use of Spring Boot dependencies which enables you to simply select the required dependencies to quickly setup the back-end of your application.<br />

### What is React?
**React** is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.<br />
It's used for handling the view layer for web- and mobile applications. **React** also allows us to create reusable UI components.<br />
The use of UI components eases the development and reduces the development time of your application.<br />
<br />

## Getting Started
In your browser, navigate to: [https://start.spring.io](https://start.spring.io)<br />
* **Project:** ```Maven Project```<br />
* **Language:** ```Java```<br />
* **Spring Boot (version):** We will use the latest stable version: ```2.3.3```<br />
* **Group:** this is your internet domain, backwards. For Systemation we will use: ```nl.systemation```<br />
* **Artifact:** this is the name of your project. For this project we will use: ```reactmvc```<br />
* **Description:** this is a short description about your project. For this project we will use: ```Demo Project Spring Boot React MVC```<br />
* **Packaging:** ```JAR```<br />
* **Java:** (we will use the latest version): ```11```<br />
* **Dependencies:** ```Lombok, Spring Web, Spring Data JPA, PostgreSQL Driver```

To create the Spring Boot application, click on: ![Generate Spring Boot Project](https://raw.githubusercontent.com/jeffrey-spaan/spring-boot-react-mvc/master/images/03-generate.JPG)

![Spring Boot Dependency Selection](https://raw.githubusercontent.com/jeffrey-spaan/spring-boot-react-mvc/master/images/02-startspringio.JPG)

The download of the ZIP file will start automatically. Open the ZIP file and extract the project files in your project folder.<br />

![Unzip project in project folder](https://raw.githubusercontent.com/jeffrey-spaan/spring-boot-react-mvc/master/images/05-unzip.JPG)

## Dependencies information
### Lombok
Project Lombok is a Java library that automatically plugs into the editor and build tools, spicing up Java.
Never write another getter or equals method again. Ideal to reduce boilerplate code.<br />
Want to know more about the specific Lombok annotations which we will use in our project? Visit: https://projectlombok.org/ <br />
**Tip:** Do not forget to install the Lombok plugin in your IDE.

### Spring Web
Spring Web provides core HTTP integration, including some handy Servlet filters, Spring HTTP Invoker, infrastructure to integrate with other web frameworks and HTTP technologies.

### Spring Data JPA
The Java Persistence API (JPA) is a Java specification for accessing, persisting, and managing data between Java objects / classes and a relational database.

### PostgreSQL Driver
(Pronounced "post-gress-Q-L") is an open source relational database management system ( DBMS ) developed by a worldwide team of volunteers.<br />
In order to persist data in the PostgreSQL database, this dependency is required.

### POM.xml
A Project Object Model or POM is the fundamental unit of work in Maven.<br />
It is an XML file that contains information about the project and configuration details used by Maven to build the project.<br />
<br />
The following listing shows the ```POM.xml``` file that is created when you've chosen a Maven project:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.3.3.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>nl.systemation</groupId>
	<artifactId>reactmvc</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>reactmvc</name>
	<description>Demo Project Spring Boot React MVC</description>

	<properties>
		<java.version>11</java.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.postgresql</groupId>
			<artifactId>postgresql</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
			<exclusions>
				<exclusion>
					<groupId>org.junit.vintage</groupId>
					<artifactId>junit-vintage-engine</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>

</project>
```
<hr>

## Create back-end files
Now let's add some code to make a fully functioning **Spring Boot MVC servlet.**<br />
To do so, following files have to be created:
* Entity
* Controller
* Service
* Repository

The files have to be added according the best practices **Spring Boot Architecture guidelines**.

```bash
server\src\main\java\nl\systemation\reactmvc
└──user
   ├──User.java
   ├──UserController.java       
   ├──UserRepository.java
   └──UserService.java
```
<hr>

### Spring Boot Entity
Let's add an entity to enable Spring Boot to persist data to/from the database.<br />
To do so, add an entity named: ```User.java```<br />
Annotate the entity with the **Spring Boot** persistence ```@Entity``` annotation.<br />
This annotation will instruct Spring Boot that the class is an entity and is mapped to a database table.<br /><br />
We will also use some Lombok annotations to reduce boilerplate code and ensure our code will remain easy to read.

```java
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
```
<hr>

### Spring Boot Controller
In order to access the API via the front-end (HTTP request), an access point is mandatory.<br />
Let's add a controller named: ```UserController.java``` <br/>
```@RestController```: This is a **Spring Boot** annotation which marks the Java class as a Controller;<br />
```@RequestMapping```: This is a **Spring Boot** annotation which maps ```"/api/user"``` as the API access point;

```java
@RequiredArgsConstructor // Lombok to create the Required Args Constructor
@CrossOrigin(origins="http://localhost:3000", maxAge = 3600) // Allow access from port 3000 to this API
@RestController // Mark this Java class as the controller layer
@RequestMapping("/api/users") // Link to the API access point
public class UserController {

    private final UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PutMapping
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }

    @PostMapping
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @DeleteMapping("/{id}") // DELETE request handler by ID
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

}
```
<hr>

### Spring Boot Service
In order to process the requests, coming in via the Controller, business logic is written in the **Spring Boot Service** layer.<br />
Via the service layer, commands will be given to the repository to transfer data to/from the database.<br />
```@Service```: This is a **Spring Boot** annotation which marks the Java class as the Service layer;<br />

```java
@RequiredArgsConstructor // Lombok to create the Required Args Constructor
@Service // Mark this Java class as the service layer
public class UserService {

    private final UserRepository userRepository;

    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll()
                .forEach(users::add);
        return users;
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public void addUser(User user) {
        userRepository.save(user);
    }

    public void updateUser(User user) {
        userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

}
```
<hr>

### Spring Boot Repository
The repository will handle the commands which it in turn receives from the service layer.<br />
The repository can implement a variety of commands from various repositories.<br />
In this example we will implement the JpaRepository, which has some pre-configured methods which we use in our service layer, such as:
* **findAll** *(gets all data from a specific database table)*
* **findById** *(gets data from a specific row, which is found via the provided ID)*
* **save** *(saves data to the database table)*
* **deleteById** *(deletes data from a specific row, which is found via the provided ID)*

```@Repository```: This is a **Spring Boot** persistence annotation which marks the Java interface as the Repository;

```java
@Repository // Mark this Java interface as the repository
public interface UserRepository extends JpaRepository<User, Long> {
}
```
<hr>

## Database connectivity
### import.sql
To add initial data into the database, we will make use of the import.sql file, which we will save in the resources folder. 

```bash
server\src\main\resources
└──import.sql
```

The import.sql file will contain following data to initially load with the application startup:
```sql
INSERT INTO users(id, first_name, last_name, age, email, password) VALUES ('1', 'Bill', 'Gates', 64, 'b.gates@github.com', 'password123');
INSERT INTO users(id, first_name, last_name, age, email, password) VALUES ('2', 'Elon', 'Musk', 49, 'e.musk@github.com', 'password123');
INSERT INTO users(id, first_name, last_name, age, email, password) VALUES ('3', 'Jeffrey', 'Spaan', 33, 'j.spaan@github.com', 'password123');
INSERT INTO users(id, first_name, last_name, age, email, password) VALUES ('4', 'First', 'Last', 30, 'test@github.com', 'password123');
```
<hr>

### application.properties
Now we will connect the PostgreSQL database with our code.<br />
In the ```server\src\main\resources``` folder, find the ```application.properties``` file.<br />
Here we will add following lines to connect the server with the database, enabling us to persist data to/from the database.

```properties
# Spring Boot PostgreSQL Database connection settings:
spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
spring.datasource.username=postgres
spring.datasource.password=root

# Database (create) tables || (update) tables settings:
spring.jpa.hibernate.ddl-auto=create-drop
```

**NOTE:** *Change the username and password as per your own credentials.*
<hr>

### Download PostgreSQL
In order to use PostgreSQL, download PostgreSQL via: https://www.postgresql.org/download/ <br />
Once installed, start-up PostgreSQL.
<hr>

### Download Postman
In order for us to test the http requests, download Postman via: https://www.postman.com/downloads/ <br />
Once installed, start-up Postman.
<hr>

## Start back-end

Open the terminal window, and execute following commands:<br />
*Note, each command line will be indicated with the **$** symbol.*
```bash
$ cd server
$ mvn spring-boot:run
```

Once the server has started, we will test our application with Postman.<br />
Postman enables us to test the http requests, which are pre-set in the **Spring Boot controller layer**.<br />
<br />
First let's test the **GET all users HTTP request**:
<br />

![Postman HTTP Get all request](https://raw.githubusercontent.com/jeffrey-spaan/spring-boot-react-mvc/master/images/06-postmangetall.JPG)

<br />

Now let's test the **GET per ID HTTP request**:
<br />

![Postman HTTP Get by ID request](https://raw.githubusercontent.com/jeffrey-spaan/spring-boot-react-mvc/master/images/07-postmangetid.JPG)

<br />

Let's also test the **PUT HTTP request**.<br />
In order for us to change data in the database, we require to provide a body with the specified data which we would like to change:
<br />

![Postman HTTP Put request](https://raw.githubusercontent.com/jeffrey-spaan/spring-boot-react-mvc/master/images/09-postmanput.JPG)

<br />

Finally, let us test the **DELETE per ID HTTP request**.<br />
<br />
![Postman HTTP Delete by ID request](https://raw.githubusercontent.com/jeffrey-spaan/spring-boot-react-mvc/master/images/08-postmandeleteid.JPG)

All requests have been correctly processed by the application. Let's proceed with building our front-end.

## React Front-end
First we will install the React front-end, which is done via NodeJS.<br />
In case you have not yet installed NodeJS, download NodeJS from: https://nodejs.org/en/ <br />
<br/>
Open the terminal window, and execute following command in the project folder (not in the server folder):<br/>
*Note, each command line will be indicated with the **$** symbol.*

```bash
$ npx create-react-app client
```

After installation, the following text is shown:
```bash
We suggest that you begin by typing:

  cd client
  npm start

Happy hacking!
```

Let's do that:
```bash
$ cd client
$ npm start
```
<br />

The React front-end is started on port 3000:<br />

![React application first run](https://raw.githubusercontent.com/jeffrey-spaan/spring-boot-react-mvc/master/images/10-react.JPG)

<br />

Now let's allow data to be transferred between the back-end (port 8080) and the front-end (port 3000).<br />
Open the package.json file which is located in: ```client/package.json``` <br />
Add the following line in the package.json file: ```"proxy": "http://localhost:8080",``` <br />
<br />
Your **package.json** file should now look a bit like this:

```json
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "3.4.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "proxy": "http://localhost:8080",
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```
<hr>

Alright, time to show the data in the front-end. We will show the users in a table.<br />
To do so, we will execute following tasks:
* Get the data from the back-end to the front-end (using **Axios**);
* Map the data into a table.

Add **Axios** into the React Node Modules so React can use **Axios**.<br />
*To extend the React Node modules, you should execute the related NodeJS (NPM) command in the terminal.* <br />
Open the terminal.

```bash
$ cd client
$ npm install axios
```

Open the ```App.js``` file, which is located in the ```client/src``` folder.<br />
Amend as follows:<br />
*Comments provided to clarify the specific functionalities.*

```jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'; // Import Axios in order to use Axios functionality and GET data from the back-end

// React App Component
export default function App() {
  // React hooks state management
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  // Create function to load users
  const getAllUsers = async () => {
    try { // Try to execute
      const response = await axios.get("http://localhost:8080/api/users"); // Get all users via controller GET all HTTP api/users
      setUsers(response.data); // Set state users
    } catch (error) { // Otherwise catch the error
      setError(error); // Set the error
    }
  }

  useEffect(() => { // useEffect loads function(s) with first render OR re-render
    getAllUsers();
  }, [])

  return (
      <div className="App">
        <header className="App-header">
          <table>
            <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
            </thead>
            <tbody>
              {
                users.map((user) => ( // Map each user to the table rows
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.age}</td>
                      <td>{user.email}</td>
                    </tr>
                ))
              }
            </tbody>
          </table>
        </header>
      </div>
  );
}
```

The data is now available in the front-end.<br />
Good work!

![React Axios Data](https://raw.githubusercontent.com/jeffrey-spaan/spring-boot-react-mvc/master/images/11-reactaxiosdata.JPG)

Congratulations! You have successfully created **your first Full Stack application using Spring Boot and React.** <br />
With this we have come to the end of this tutorial.<br />
I hope you've enjoyed the process, please give it a **Star** in case you liked it.<br />
Thank you for your support!