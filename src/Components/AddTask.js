import React, { useState } from 'react';

function AddTask() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const deletetask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  return (
    <div className=''>
      <div className='addTask'>
        <input type='text' onChange={(event) => setNewTask(event.target.value)} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => (
          <div key={task.id}>
            <h1>{task.taskName}</h1>
            <button onClick={() => deletetask(task.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddTask;
