import { Todo } from '../data/dataDef';



export const addTodo = (todos: Todo[], newTodoText: string): Todo[] => {
  if (newTodoText.trim()) {
    const newTodoItem: Todo = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
      inProgress: false,
    };
    return [...todos, newTodoItem];
  }
  return todos;
};
