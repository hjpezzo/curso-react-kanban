import React from "react";
import PropTypes from "prop-types";
import "./tasklist.css";
import TaskItem from "../TaskItem/TaskItem";
import plusIcon from "../../img/plus-icon.svg";

//import , { useState } from "react"
//export default function TaskList(props) {
//  const [count, setCount] = useState(0);
//  const incrementar = () => {
//    setCount((currentCount) => {
//      return currentCount + 1;
//    });
//  };

//  return (
//    <div className="tasklist">
//      <div className="title">{props.title}</div>
//      <div className="content">{count}</div>
//<div className="content">
//{tasks.map((task) => {
//  return <div key={task.id}>{task.title}</div>;
//})}
//</div>
//      <button onClick={incrementar}>incrementar</button>
//    </div>
//  );
//}

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button onClick={addTask} className="btn">
          <img src={plusIcon} alt="plus" />
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired
};
