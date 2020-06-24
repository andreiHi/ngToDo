import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TODO_REDUCER_NODE, todoReducer } from './store/todo/todo.reducer';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoWidgetComponent } from './components/widget/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './components/ui/todo-create-form-ui/todo-create-form-ui.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './components/ui/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/ui/todo-list-item/todo-list-item.component';
import { TodoItemEditComponent } from './components/ui/todo-item-edit/todo-item-edit.component';

@NgModule({
  declarations: [TodoPageComponent,
    TodoWidgetComponent,
    TodoCreateFormUiComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoItemEditComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer), // подключение стора в дочернем модуле
    TodoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TodoModule {
}
