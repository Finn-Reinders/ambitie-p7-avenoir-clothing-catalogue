# Technical Design Document
This document provides technical details on how to implement a To-Do List Web Application
based on the provided functional design document.

## System Architecture
A static website architecture is used:
![architecture_simple.png](Imgs%2Farchitecture_simple.png)
When a user opens the to-do web application, the frontend will be loaded from the server. 

### Frontend
   - **Framework:** No framework is used.
   - **Styling:** CSS for styling components.
   - The LocalStorage api is used to store the tasks in the browser:

````javascript
localStorage.setItem("task", '{"title": "a title", "description": "a description"}');
const t = JSON.parse(localStorage.getItem("task"));
console.log(t.title); // a title
console.log(t.description); // a description
````

### Deployment
   - **Cloud Platform:** Github Pages

## Frontend wireframes
![wireframe_todo.jpg](Imgs%2Fwireframe_todo.jpg)
![wireframe_todo_context_menu.jpg](Imgs%2Fwireframe_todo_context_menu.jpg)
![wireframe_todo_context_menu_update.jpg](Imgs%2Fwireframe_todo_context_menu_update.jpg)

## Security Considerations
- **Data Storage:** Encrypt data.

## Testing
- Unit tests should be written for functions that add, update and delete tasks.
- User acceptance testing should be performed on the final product to ensure that it meets the requirements.
