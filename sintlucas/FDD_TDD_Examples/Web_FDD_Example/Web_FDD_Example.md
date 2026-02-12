# Functional Design Document (given by teachers)
A simple To-Do List Web Application. 

## Functional requirements

1. A user sees a list of tasks. 
2. A user can add new tasks. 
3. A user can delete a task. 
4. A user can update a task. 
5. When a user closes the browser and reopens it, the tasks should be shown.

## Non-functional requirements

### Performance
The app should be able to support 100 users at a time with no delay.

### Security
A user should see only their own tasks and not of other users.


--- 
# After refinement of each requirement (by students)

---  
## Functional requirements

1. A user sees a list of tasks.
   * A list of tasks (if any), each with a title and a description, is shown after opening the homepage:
   ![wireframe_todo.jpg](Imgs%2Fwireframe_todo.jpg)

2. A user can add new tasks.
   * A user enters a title and a description.
   * After pressing OK, the title and description are validated.
   * If not correct, the user is notified.
   ![wireframe_todo.jpg](Imgs%2Fwireframe_todo.jpg)

3. A user can delete a task.
   * When a user clicks on an item (title or description) a context menu appears.
   * When the 'delete task' option is selected, the task is deleted - without warning - from the list and the menu closes.
   ![wireframe_todo_context_menu.jpg](Imgs%2Fwireframe_todo_context_menu.jpg)

4. A user can update a task.
   * When a user clicks on an item (title or description) a context menu appears.
   * When the 'update task' is selected, a pop-up is shown
   ![wireframe_todo_context_menu_update.jpg](Imgs%2Fwireframe_todo_context_menu_update.jpg)
   * The new input is checked. If not correct, the user is notified.
   * When correct the task is updated.

5. When a user closes the browser and reopens it, the tasks should be shown.
  * The data should be saved somehow.
