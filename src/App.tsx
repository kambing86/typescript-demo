import { useState } from "react";
import "./App.css";
import TodoItem from "./TodoItem";

let id = 0;

type Task = { id: number; desc: string; done: boolean };

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        {tasks.map((task) => (
          <TodoItem
            task={task}
            onClick={(id) => {
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
            const newId = ++id;
            setTasks((prev) => [
              ...prev,
              { id: newId, desc: input, done: false },
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
