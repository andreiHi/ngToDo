import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../../store/todo/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input()
  todoList: Todo[] = [];

  @Output()
  deleteTodo = new EventEmitter<number>();

  @Output()
  toggle = new EventEmitter<number>();

  constructor() { }


  ngOnInit(): void {
  }

  delete(id: number) {
    this.deleteTodo.emit(id);
  }

  onToggle(event, id: number) {
    event.preventDefault();
    this.toggle.emit(id);
  }
}
