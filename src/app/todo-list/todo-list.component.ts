import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  newTask: string = '';
  todos = [
    { task: 'Example Task 1', completed: false },
    { task: 'Example Task 2', completed: true },
  ];

  addTask() {
    if (this.newTask.trim()) {
      this.todos.push({ task: this.newTask.trim(), completed: false });
      this.newTask = '';
    }
  }
}
