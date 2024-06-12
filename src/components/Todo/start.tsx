// src/components/Start.tsx
import React from "react";
import { IProps } from "../../data/dataDef";
import { InputData } from "../reUsableCom";

export const Start: React.FC<IProps> = ({ todos, setTodos,  }) => {
  const startTodo = todos.filter(todo => !todo.completed && !todo.inProgress);
  return (
    <div className="start">
      <h2>Not Started</h2>
      <InputData todos={todos} setTodos={setTodos} filteredTodo={startTodo} types="start"/>
    </div>
  );
};
