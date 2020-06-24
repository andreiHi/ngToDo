import { Todo } from './models/todo';
import { TodoActions, TodoActionsType } from './todo.actions';

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idIncrement: number;
  todoList: Todo[];
}

const initialState: TodoState = {
  idIncrement : 1,
  todoList: []
};

export const todoReducer = (state: TodoState = initialState, action: TodoActions) => {
  switch (action.type) {
    case TodoActionsType.create:
      return {... state,
        idIncrement: state.idIncrement + 1,
        todoList: [
          ...state.todoList,
          {
            id: state.idIncrement,
            name: action.payload.name,
            completed: false
          }
        ]
      };
    case TodoActionsType.delete:
      return {
        ... state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload.id)
      };
    case TodoActionsType.update:
      return {
        ... state,
        todoList: state.todoList.map(todo => todo.id === action.payload.id ? {
          ...todo,
          completed: !todo.completed } : todo)
      };
    default: return state;
  }
};
