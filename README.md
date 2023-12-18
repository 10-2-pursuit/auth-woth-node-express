# Introduction to User Authentication: Building Secure Applications
In the realm of web development, user authentication is a fundamental concept that plays a pivotal role in creating secure and personalized applications. It involves the processes of user registration, login, and verification, allowing individuals to interact with web services in a controlled and secure manner. Learning to build applications with user authentication is essential for several reasons, contributing to both the security and usability of modern web applications. This guide provides an overview of the key components and concepts involved in building an application with user authentication, empowering developers to create robust and user-friendly digital experiences.

## Frontend Responsibilities
### User Registration
To get started, users need to register for an account by providing their desired username, email, and password. This information will be stored securely in the application's database.

Upon successful registration, users will receive a unique user_id associated with their account.

### User Login
Existing users can log in to their accounts using their credentials. Upon successful login, users will receive a session token, allowing them to access protected routes.

## Frontend Route Protection
Certain routes or features within an application, such as resource creation, should only be accessible to authenticated users. Frontend route protection ensures that unauthorized users cannot navigate to these protected routes. This is achieved by implementing a route guard, often in the form of a Higher Order Component (HOC) in React.

Heres is an example of a protected Route Higher Order Component:
```jsx
// ProtectedRoute.js
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default ProtectedRoute;
```

## Backend Responsibilities
### User Registration
User registration is the initial step in allowing individuals to create accounts within your application. During registration, users typically provide essential information such as a unique username, email address, and a secure password. Upon successful registration, this information is stored securely in the application's database, providing users with a unique identity within the system.



```sql
-- Users Table
CREATE TABLE Users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Resources Table
CREATE TABLE Resources (
  resource_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  title VARCHAR(100) NOT NULL,
  content TEXT,
  creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

```

## Users and Resources Database Design

The provided SQL schemas illustrate a common database design for user authentication and related resources. Let's break down how these schemas work in tandem:

### Users Table

The Users table serves as the central repository for user information. Each user is assigned a unique `user_id` upon registration, and their chosen `username`, `email`, and securely hashed `password` are stored in this table. The `registration_date` timestamp records when a user joins the system.

### Resources Table

The Resources table is linked to the Users table through a foreign key relationship. The `user_id` in the Resources table refers to the `user_id` of the corresponding user in the Users table, establishing a one-to-many relationship. This design allows each user to be associated with multiple resources.

### How They Work Together

1. **User Registration:**
   - When a user registers, their information is inserted into the Users table, and a unique `user_id` is generated.
   - This `user_id` becomes a reference point for linking the user to any resources they create.

2. **Resource Creation:**
   - When a user creates a resource (e.g., a note), a new entry is added to the Resources table.
   - The `user_id` field in the Resources table is populated with the `user_id` of the creator from the Users table, establishing a connection between the user and the resource.

3. **Retrieving User's Resources:**
   - To retrieve all resources associated with a particular user, a query can be executed to select records from the Resources table where the `user_id` matches the user's `user_id`.

4. **Foreign Key Relationship:**
   - The foreign key relationship between the Users and Resources tables ensures data integrity. It prevents the creation of resources with non-existent user references, maintaining consistency in the database.

In summary, these schemas work together to create a structured and relational database. The Users table stores user information, and the Resources table captures data related to resources created by users. The foreign key relationship enables the association between users and their respective resources, facilitating efficient data retrieval and maintaining database integrity.


## User Login
User login enables individuals to access their accounts by providing the credentials they used during registration. Upon successful login, the system generates a session token or cookie, which is then sent to the client. This token serves as proof of authentication and allows the user to remain logged in across different pages or visits to the application.

## Session Token
A session token is a piece of data that identifies and authenticates a user during their session. This token is often stored on the client side, either as a cookie or in local storage. It is sent with each subsequent request to the server, allowing the server to identify the user and maintain their authenticated state.

Example:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

```

## Technologies Used
* Backend: Express.js with Passport.js for authentication
* Database: Postgress or another database of your choice
* Frontend: React with a state management solution (e.g., UseContext)

By understanding and implementing these user authentication concepts, your students will develop a solid foundation for creating secure and user-friendly authentication systems in their web applications.