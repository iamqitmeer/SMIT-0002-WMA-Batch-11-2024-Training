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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-zinc-900 text-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>

        <form action={addTodo} className="flex mb-4">
          <input
            type="text"
            name="todo"
            placeholder="Add a new task..."
            className="flex-1 p-3 border border-zinc-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-zinc-800 bg-zinc-800"
          />
          <input type="submit" className="cursor-pointer bg-blue-500 text-white font-semibold px-4 rounded-r-lg hover:bg-blue-600 transition duration-200" value="Add Todo" />

        </form>

        <ul className="space-y-3">
          {res.todos.map((todo) => {
            return (
              <ListItem key={todo.id} todo={todo} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
