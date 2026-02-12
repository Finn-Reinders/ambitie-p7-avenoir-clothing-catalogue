# Technical Design Document (example for a To-Do List Web Application)
This document provides technical details on how to implement a To-Do List Web Application
based on the provided functional design document.

## System Architecture
A Single Page Application structure will be used:
![architecture.png](Imgs%2Farchitecture.png)

When a user opens the to-do web application, the frontend will be loaded from the server.
The frontend will then make API calls to the backend for data and functionality.
The backend will interact with the database to store and retrieve data.

### Frontend
- **Framework:** Vue for building a reactive, dynamic user interface.
- **Routing Library:** Vue Router for client-side routing.
- **Styling:** CSS for styling components.
- **UI Library:** Vuetify for pre-styled, responsive components.

### Backend
- **Framework:** Node.js with Express.js for a REST API (to connect the frontend with the backend).
- **Database:** MySQL or MariaDB for persistent storage.
- **Authentication:** JWT (JSON Web Tokens) for stateless, secure user authentication.
- **Notifications:** Node Scheduler or Cron Jobs to send timely notifications.

### Deployment
- **Cloud Platform:** Render.com for easy deployment and scaling.
- **CI/CD:** GitHub Actions for automated testing and deployment.

## Frontend wireframes
![wireframes.png](Imgs%2Fwireframes.png)

## Backend Database ERD Diagram
![erd_diagram.png](Imgs%2Ferd_diagram.png)
Created in https://app.quickdatabasediagrams.com/

```
user
---
user_id PK int
username varchar(100)
email varchar(100)
password varchar(255)

list
---
list_id PK int
user_id int FK >- user.user_id
name varchar(100)
created_at timestamp

task
---
task_id PK int
list_id int FK >- list.list_id
title varchar(100)
description text NULL
due_date datetime NULL
completed bool
created_at datetime
```

## Backend REST API Endpoints
1. **Authentication:**
    - `POST /auth/signup`: Register new user.
    - `POST /auth/login`: Log in and obtain access token.

2. **Task Management:**
    - `GET /task-lists`: Get all task lists for a user.
    - `POST /task-lists`: Create a new task list.
    - `PUT /task-lists/{id}`: Update a specific task list.
    - `DELETE /task-lists/{id}`: Delete a specific task list.

    - `GET /tasks`: Get tasks for a specific task list.
    - `POST /tasks`: Create a new task.
    - `PUT /tasks/{id}`: Update a specific task.
    - `DELETE /tasks/{id}`: Delete a specific task.
    - `PATCH /tasks/{id}/complete`: Mark a task as complete.

3. **Notifications:**
    - `POST /notifications/schedule`: Schedule task reminders.
    - `POST /notifications/send`: Send out a task notification immediately.

## Security Considerations
- **Authentication:** Enforce strong passwords and validate JWTs.
- **Data Storage:** Encrypt sensitive user data, and back up periodically.

## Testing
- Unit tests should be written for all REST API endpoints functions.
- Integration tests should also be written to test the entire API flow.
- User acceptance testing should be performed on the final product to ensure that it meets the requirements.
