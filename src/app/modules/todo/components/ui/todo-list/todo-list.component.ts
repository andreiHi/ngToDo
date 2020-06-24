import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../../store/todo/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  editIds: number[] = [];

  @Input()
  todoList: Todo[] = [];

  @Output()
  deleteTodo = new EventEmitter<number>();

  @Output()
  toggle = new EventEmitter<number>();

  @Output()
  edit = new EventEmitter<{ id: number, name: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(id: number) {
    this.deleteTodo.emit(id);
  }

  onToggle( id: number) {
    this.toggle.emit(id);
  }

  onEdit(name: string, id: number) {
    this.editIds = this.editIds.filter(ids => ids !== id);
    this.edit.emit({id, name });
  }

  showEdit(id: number) {
    this.editIds.push(id);
  }
}
