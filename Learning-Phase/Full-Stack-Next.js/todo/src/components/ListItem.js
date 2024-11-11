"use client"

import { deleteTodo, updateTodo } from "@/actions/todos"
import { useState } from "react"

function ListItem({ todo }) {

    let [isEdit, setIsEdit] = useState(false)
    let [isEditedValue, setEditedValue] = useState("")

    const onEdit = async () => {
        if (isEdit) {
            let obj = { ...todo }
            obj.title = isEditedValue
            await updateTodo(obj)
            setIsEdit(false)
        } else {
            setIsEdit(true)
            setEditedValue(todo.title)
        }
    }
    const onDelete = async () => {
        let obj = { ...todo }
        deleteTodo(obj)
    }
    async function onIsComplete() {
        let obj = { ...todo }
        obj.completed = !obj.completed
        await updateTodo(obj)
    }

    return (
        <li className="flex flex-col sm:flex-row cursor-pointer items-center justify-between p-4 border border-zinc-700 rounded-lg bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-lg transition duration-200 hover:shadow-xl mb-4">
            <div className="flex items-center flex-grow mb-3 sm:mb-0 sm:mr-4">
                {isEdit ? (
                    <input
                        className={`text-white bg-transparent border-b-2 border-white text-xl p-2 focus:outline-none ${todo.completed ? "line-through text-gray-400" : "text-white"}`}
                        value={isEditedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                    />
                ) : (
                    <span className={`text-lg sm:text-xl font-medium ${todo.completed ? "line-through text-gray-400" : "text-gray-200"}`}>
                        {todo.title}
                    </span>
                )}
            </div>
            <div className="flex space-x-2">
                <button onClick={onIsComplete} className={`px-4 py-2 rounded-lg font-semibold shadow-md text-white transition transform hover:scale-105 ${todo.completed ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"}`}>
                    {todo.completed ? "Undo" : "Done"}
                </button>
                <button onClick={onEdit} className="px-4 py-2 rounded-lg font-semibold shadow-md bg-yellow-500 text-white transition transform hover:scale-105 hover:bg-yellow-600">
                    Edit
                </button>
                <button onClick={onDelete} className="px-4 py-2 rounded-lg font-semibold shadow-md bg-red-500 text-white transition transform hover:scale-105 hover:bg-red-600">
                    Delete
                </button>
            </div>
        </li>
    )
}

export default ListItem
