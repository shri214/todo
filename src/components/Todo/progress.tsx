import React from 'react';
import { IProps} from '../../data/dataDef';
import { InputData } from '../reUsableCom';



export const InProgress: React.FC<IProps> = ({ todos,setTodos }) => {
  const progressTodos = todos.filter(todo => todo.inProgress);
  return (
    <div className="in-progress">
      <h2>In Progress</h2>
     <InputData todos={todos} filteredTodo={progressTodos} setTodos={setTodos} types="progress"/>
    </div>
  );
};

