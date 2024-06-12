import React from "react";
import { toggleComplete } from "../../Function/complete";
import { deleteTodo } from "../../Function/delete";
import { editTodo } from "../../Function/edit";
import { toggleProgress } from "../../Function/inProgress";
import { toggleStart } from "../../Function/start";
import { IProps } from "../../data/dataDef";
import { motion } from "framer-motion";
export const InputData: React.FC<IProps & { types: string }> = ({ todos, setTodos, types, filteredTodo }) => {
    
  const handleToggleComplete = (id: number) => {
    setTodos(toggleComplete(todos, id));
  };
  const handleToggleProgress = (id: number) => {
    setTodos(toggleProgress(todos, id));
  };
  const handleDeleteTodo = (id: number) => {
    setTodos(deleteTodo(todos, id));
  };
  const handleEdit = (id: number, text: string) => {
    setTodos(editTodo(todos, id, text));
  };
  const handleToggleStart = (id: number) => {
    setTodos(toggleStart(todos, id));
  };

  return (
    <div>
    {filteredTodo?.map((todo) => (
      <motion.ul
        key={todo.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        layout
      >
        <li className={todo.completed ? "completed" : todo.inProgress ? "progress" : ""}>
          <input
            type="text"
            value={todo.text}
            onChange={(e) => handleEdit(todo.id, e.target.value)}
          />
          {types !== "start" && (
            <button onClick={() => handleToggleStart(todo.id)} className="start">Not Started</button>
          )}
          {types !== "progress" && (
            <button onClick={() => handleToggleProgress(todo.id)} className="progress">InProgress</button>
          )}
          {types !== "completed" && (
            <button onClick={() => handleToggleComplete(todo.id)} className="completed">Completed</button>
          )}
          <button onClick={() => handleDeleteTodo(todo.id)} className="delete">Delete</button>
        </li>
      </motion.ul>
    ))}
  </div>
  );
};
