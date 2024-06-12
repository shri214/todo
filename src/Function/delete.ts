import { Todo } from "../data/dataDef";

export const deleteTodo = (todos: Todo[], id: number): Todo[] => {
    return todos.filter(todo => todo.id !== id);
  };