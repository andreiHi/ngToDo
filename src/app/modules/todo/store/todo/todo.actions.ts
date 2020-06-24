import { Action } from '@ngrx/store';
export enum TodoActionsType {
  create= '[TODO] create todo item'
}

export class TodoCreateAction implements Action {
  readonly type = TodoActionsType.create;
  constructor(public payload: {name: string}) {
  }
}

// экспортируем созданные Action
export type TodoActions = TodoCreateAction;
