import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../../store/todo/models/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input()
  todo: Todo;

  @Output()
  deleteTodo = new EventEmitter<void>();

  @Output()
  toggle = new EventEmitter<number>();

  @Output()
  edit = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteTodo.emit();
  }

  onToggle(event) {
    event.preventDefault();
    this.toggle.emit();
  }

  onEdit() {
    this.edit.emit();
  }
}
