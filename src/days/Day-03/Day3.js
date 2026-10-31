import React, { useState } from "react";

function Day3() {
  // Todo List State
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // Password State
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Add Todo
  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Complete Todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-white px-5 py-10">

      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-3">
          React Practice Projects
        </h1>

        <p className="text-gray-400 text-center mb-10">
          useState • Events • Conditional Rendering • Tailwind CSS
        </p>

        {/* TODO LIST */}
        <div className="bg-[#151B2B] p-6 rounded-2xl border border-blue-500/30 shadow-xl mb-10">

          <h2 className="text-2xl font-bold text-blue-400 mb-5">
            1. Todo List
          </h2>

          {/* Input and Button */}
          <div className="flex gap-3 mb-6">

            <input
              type="text"
              placeholder="Enter your task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addTodo();
              }}
              className="flex-1 min-w-0 bg-[#080B12] border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-blue-400"
            />

            <button
              onClick={addTodo}
              className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg font-semibold transition"
            >
              Add
            </button>

          </div>

          {/* Todo Items */}
          <div className="space-y-3">

            {todos.length === 0 ? (
              <p className="text-gray-400 text-center py-5">
                No tasks yet. Add your first task!
              </p>
            ) : (
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center justify-between gap-3 bg-[#080B12] p-4 rounded-lg border border-gray-700"
                >

                  <div className="flex items-center gap-3 min-w-0">

                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="w-5 h-5 accent-blue-500"
                    />

                    <span
                      className={`break-words ${
                        todo.completed
                          ? "line-through text-gray-500"
                          : "text-white"
                      }`}
                    >
                      {todo.text}
                    </span>

                  </div>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-rose-400 hover:text-rose-500 font-semibold"
                  >
                    Delete
                  </button>

                </div>
              ))
            )}

          </div>

          <p className="text-sm text-gray-400 mt-5">
            Total Tasks: {todos.length} | Completed:{" "}
            {todos.filter((todo) => todo.completed).length}
          </p>

        </div>

        {/* SHOW / HIDE PASSWORD */}
        <div className="bg-[#151B2B] p-6 rounded-2xl border border-rose-500/30 shadow-xl">

          <h2 className="text-2xl font-bold text-rose-400 mb-5">
            2. Show / Hide Password
          </h2>

          <label className="block text-gray-300 mb-2">
            Enter Password
          </label>

          <div className="flex gap-3">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 min-w-0 bg-[#080B12] border border-gray-600 rounded-lg px-4 py-3 outline-none focus:border-rose-400"
            />

            <button
              onClick={() => setShowPassword(!showPassword)}
              className="bg-rose-500 hover:bg-rose-600 px-5 py-3 rounded-lg font-semibold transition"
            >
              {showPassword ? "Hide" : "Show"}
            </button>

          </div>

          {/* Conditional Rendering */}
          <p className="text-sm text-gray-400 mt-4">
            {showPassword
              ? "Password is visible"
              : "Password is hidden"}
          </p>

        </div>

      </div>

    </div>
  );
}

export default Day3;