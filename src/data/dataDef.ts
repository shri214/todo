import { Dispatch, SetStateAction } from "react";


export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  inProgress:boolean
}

export interface IProps {
  todos:Todo[];
  setTodos:Dispatch<SetStateAction<Todo[]>>;
  types?:string;
  filteredTodo?:Todo[]
}

