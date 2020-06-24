import { Action } from '@ngrx/store';
export enum TodoActionsType {
  create= '[TODO] create todo item',
  update = '[TODO] update todo item',
  edit = '[TODO] edit todo item',
  delete = '[TODO] delete todo item'
}

export class TodoCreateAction implements Action {
  readonly type = TodoActionsType.create;
  constructor(public payload: {name: string}) {
  }
}

export class TodoDeleteAction implements Action {
  readonly type = TodoActionsType.delete;
  constructor(public payload: {id: number}) {
  }
}

export class TodoUpdateAction implements Action {
  readonly type = TodoActionsType.update;

  constructor(public payload: { id: number }) {
  }
}
export class TodoEditAction implements Action {
  readonly type = TodoActionsType.edit;
  constructor(public payload: {id: number, name: string}) {
  }
}

// экспортируем созданные Action
export type TodoActions =
  TodoCreateAction |
  TodoDeleteAction |
  TodoUpdateAction |
  TodoEditAction;
