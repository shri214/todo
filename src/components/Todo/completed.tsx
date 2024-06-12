// src/components/Completed.tsx
import React from "react";
import { IProps } from "../../data/dataDef";
import { InputData } from "../reUsableCom";

export const Completed: React.FC<IProps> = ({ todos, setTodos }) => {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="completed">
      <h2>Completed</h2>
      <InputData
        todos={todos}
        setTodos={setTodos}
        filteredTodo={completedTodos}
        types="completed"
      />
    </div>
  );
};
