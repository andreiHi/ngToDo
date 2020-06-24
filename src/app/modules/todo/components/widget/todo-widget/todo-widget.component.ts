import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoState } from '../../../store/todo/todo.reducer';
import { TodoCreateAction } from '../../../store/todo/todo.actions';
import { Todo } from '../../../store/todo/models/todo';
import { todoListSelector } from '../../../store/todo/todo.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent implements OnInit {

  todoList: Todo[] = [];
  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

  constructor(private store$: Store<TodoState>) { }

  ngOnInit(): void {
  }

  onCreate(name: string) {
    this.store$.dispatch(new TodoCreateAction({name}));
  }
}
