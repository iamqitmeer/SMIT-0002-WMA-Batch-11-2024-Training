import React from "react";
import "../../globals.css";
import { addTodo } from "@/actions/todos";
import ListItem from "@/components/ListItem";

async function Todos() {
  let res = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache"
  });
  res = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 flex items-center justify-center p-4">
      <div className="bg-zinc-900 text-white rounded-lg shadow-2xl w-full max-w-[600px] p-8 ">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Todo List
        </h1>

        <form action={addTodo} className="flex mb-6">
          <input
            type="text"
            name="todo"
            placeholder="Add a new task..."
            className="flex-1 p-3 border border-zinc-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-zinc-800 text-white placeholder-gray-400"
          />
          <input
            type="submit"
            className="cursor-pointer bg-blue-500 text-white font-semibold px-4 rounded-r-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition-all duration-200"
            value="Add Todo"
          />
        </form>

        <ul className="space-y-4">
          {res.todos.map((todo) => (
            <ListItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
