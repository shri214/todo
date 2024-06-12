import { Todo } from "../data/dataDef";

export const toggleComplete = (todos: Todo[], id: number): Todo[] => {
  return todos.map(todo=>todo.id===id?{...todo, completed:true, inProgress:false}:todo);
  };