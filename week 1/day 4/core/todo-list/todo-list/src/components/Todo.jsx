import React, { useState } from 'react';

function Todo() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (text) => {
    const newTask = {
      text: text,
      completed: false
    };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (event, index) => {
    event.stopPropagation();
    setTasks((prevTasks) => {
      if (prevTasks[index]) {
        const updatedTasks = [...prevTasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        return updatedTasks;
      }
      return prevTasks;
    });
  };

  const handleRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const text = e.target.task.value;
          if (text) {
            handleAddTask(text);
            e.target.task.value = '';
          }
        }}
      >
        <input type="text" name="task" placeholder="Add new task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.completed ? 'completed' : ''}
            onClick={(e) => handleToggleTask(e, index)}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={(e) => handleToggleTask(e, index)}
            />
            {task.text}
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
