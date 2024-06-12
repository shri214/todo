import { Todo } from "../data/dataDef";

export const toggleStart = (todos: Todo[], id: number): Todo[] => {
  
    return todos.map(todo =>
      todo.id === id ? { ...todo, inProgress: false, completed:false } : todo
    );
  };