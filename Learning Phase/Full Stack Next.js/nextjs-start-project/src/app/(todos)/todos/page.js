import React from "react";
import "../../globals.css";

function Todos() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          <div className="bg-zinc-900 text-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>
            
            <div className="flex mb-4">
              <input
                type="text"
                placeholder="Add a new task..."
                className="flex-1 p-3 border border-zinc-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-zinc-800 bg-zinc-800"
              />
              <button className="bg-blue-500 text-white font-semibold px-4 rounded-r-lg hover:bg-blue-600 transition duration-200">
                Add
              </button>
            </div>
    
            <ul className="space-y-3">
              <li className="flex items-center justify-between p-3 border border-zinc-700 rounded-lg bg-zinc-800 transition duration-200">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={false}
                    readOnly
                    className="mr-3 h-5 w-5 text-green-500 border-zinc-700 rounded focus:ring-green-500"
                  />
                  <span className="text-gray-200">Learn React</span>
                </div>
                <div>
                  <button className="bg-yellow-500 text-white font-semibold px-3 py-1 rounded hover:bg-yellow-600 transition duration-200 mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white font-semibold px-3 py-1 rounded hover:bg-red-600 transition duration-200">
                    Delete
                  </button>
                </div>
              </li>
              <li className="flex items-center justify-between p-3 border border-zinc-700 rounded-lg bg-zinc-800 transition duration-200">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={false}
                    readOnly
                    className="mr-3 h-5 w-5 text-green-500 border-zinc-700 rounded focus:ring-green-500"
                  />
                  <span className="text-gray-200">Build a Todo App</span>
                </div>
                <div>
                  <button className="bg-yellow-500 text-white font-semibold px-3 py-1 rounded hover:bg-yellow-600 transition duration-200 mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white font-semibold px-3 py-1 rounded hover:bg-red-600 transition duration-200">
                    Delete
                  </button>
                </div>
              </li>
              <li className="flex items-center justify-between p-3 border border-zinc-700 rounded-lg bg-zinc-800 transition duration-200">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={true}
                    readOnly
                    className="mr-3 h-5 w-5 text-green-500 border-zinc-700 rounded focus:ring-green-500"
                  />
                  <span className="line-through text-gray-500">Master JavaScript</span>
                </div>
                <div>
                  <button className="bg-yellow-500 text-white font-semibold px-3 py-1 rounded hover:bg-yellow-600 transition duration-200 mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white font-semibold px-3 py-1 rounded hover:bg-red-600 transition duration-200">
                    Delete
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
}

export default Todos;
