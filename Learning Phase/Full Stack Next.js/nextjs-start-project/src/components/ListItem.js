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
        <li className="flex cursor-pointer items-center justify-between p-3 border border-zinc-700 rounded-lg bg-zinc-800 transition duration-200">
            <div className="flex items-center">
                {isEdit ? (
                    <input
                        className={`${todo.completed ? "line-through text-gray-400" : "text-gray-200"} text-white bg-transparent border-2 text-xl border-white`}
                        value={isEditedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                    />
                ) : (
                    <span className={`${todo.completed ? "line-through text-gray-400" : "text-gray-200"}`}>
                        {todo.title}
                    </span>
                )}


            </div>
            <div>
                <button onClick={onIsComplete} className="bg-blue-500 text-white font-semibold px-3 py-1 rounded hover:bg-blue-600 transition duration-200 mr-2">
                    {todo.completed ? "Cancel" : "Done"}
                </button>
                <button onClick={onEdit} className="bg-yellow-500 text-white font-semibold px-3 py-1 rounded hover:bg-yellow-600 transition duration-200 mr-2">
                    Edit
                </button>
                <button onClick={onDelete} className="bg-red-500 text-white font-semibold px-3 py-1 rounded hover:bg-red-600 transition duration-200">
                    Delete
                </button>
            </div>
        </li>)
}

export default ListItem