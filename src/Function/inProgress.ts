import { Todo } from "../data/dataDef";

export const toggleProgress = (todos: Todo[], id: number): Todo[] => {
 return todos.map(todo=>todo.id===id?{...todo, inProgress:true, completed:false}:todo);
  };