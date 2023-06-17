/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
    todo = [];
    add(todos){
      this.todo.push(todos);
    }
    remove(idx){
      this.todo.splice(idx,1);
    }
    update(idx, newTodo){
      if(idx >= this.todo.length){
        return 'Invalid task';
      }
      this.todo.splice(idx,1,newTodo);
    }
    getAll(){
      return this.todo;
    }
    get(idx){
      if(idx >= this.todo.length){
        return null;
      }
      return this.todo[idx];
    }
    clear(){
      while(this.todo.length>0){
        this.todo.pop();
      }
    }
}

module.exports = Todo;
