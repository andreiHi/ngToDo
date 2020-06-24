import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodoPageComponent } from './components/todo-page/todo-page.component';

const routes: Routes = [
  {path: '', component: TodoPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {

}
