import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import TodoItem, { Task } from "./TodoItem";

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        {tasks.map((task) => (
          <TodoItem
            task={task}
            onClickDone={(id) => {
              setTasks((prev) => {
                const selectedIndex = prev.findIndex((task) => task.id === id);
                if (selectedIndex >= 0) {
                  const oldTask = prev[selectedIndex];
                  const newTask: Task = { ...oldTask, done: true };
                  return [
                    ...prev.slice(0, selectedIndex),
                    newTask,
                    ...prev.slice(selectedIndex + 1),
                  ];
                }
                return prev;
              });
            }}
            onClickDelete={(id) => {
              setTasks((prev) => {
                const selectedIndex = prev.findIndex((task) => task.id === id);
                if (selectedIndex >= 0) {
                  return [
                    ...prev.slice(0, selectedIndex),
                    ...prev.slice(selectedIndex + 1),
                  ];
                }
                return prev;
              });
            }}
          />
        ))}
        <input
          value={input}
          onChange={(event) => {
            const inputValue = event.target.value;
            setInput(inputValue);
          }}
        />
        <button
          onClick={() => {
            setTasks((prev) => [
              ...prev,
              { id: uuidv4(), desc: input, done: false },
            ]);
            setInput("");
          }}
        >
          Add Task
        </button>
      </header>
    </div>
  );
}

export default App;
