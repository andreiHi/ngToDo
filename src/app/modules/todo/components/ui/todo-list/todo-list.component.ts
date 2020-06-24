import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../../store/todo/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input()
  todoList: Todo[] = [];

  constructor() { }


  ngOnInit(): void {
  }

}
