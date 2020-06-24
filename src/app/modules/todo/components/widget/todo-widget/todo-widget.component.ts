import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoState } from '../../../store/todo/todo.reducer';
import { TodoCreateAction, TodoDeleteAction, TodoEditAction, TodoUpdateAction } from '../../../store/todo/todo.actions';
import { Todo } from '../../../store/todo/models/todo';
import { todoListSelector } from '../../../store/todo/todo.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent implements OnInit {

  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

  constructor(private store$: Store<TodoState>) { }

  ngOnInit(): void {
  }

  onCreate(name: string) {
    this.store$.dispatch(new TodoCreateAction({name}));
  }

  delete(id: number) {
    this.store$.dispatch(new TodoDeleteAction({ id }));
  }

  onToggle(id: number) {
    this.store$.dispatch(new TodoUpdateAction({ id }));
  }

  onEdit({ id, name }) {
    this.store$.dispatch(new TodoEditAction({id, name }));
  }
}
