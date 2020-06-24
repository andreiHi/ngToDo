import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../../store/todo/models/todo';

@Component({
  selector: 'app-todo-item-edit',
  templateUrl: './todo-item-edit.component.html',
  styleUrls: ['./todo-item-edit.component.scss']
})
export class TodoItemEditComponent implements OnInit {
  name = '';

  @Input()
  todo: Todo;

  @Output()
  edit = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.name = this.todo.name;
  }

  onEvent() {
    if (!!this.name) {
      this.edit.emit(this.name);
    }
  }

  onCancel() {
    this.name = this.todo.name;
  }
}
