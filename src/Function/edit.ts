import { Todo } from "../data/dataDef";

export const editTodo = (todos: Todo[], id: number, newText: string): Todo[] => {
    return todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
  };