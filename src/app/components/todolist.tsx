"use client"

import { useState } from "react"

import TodoTypes from "../types/types" 

export default function TodoList(props:{tasks:TodoTypes[]}) {

    const [todos, setTodos] = useState(props.tasks)
    const [newTodo, setNewTodo] = useState<TodoTypes>({    
        id: todos.length,
        todo: "",
        done: false
    })



    return (
        <>
            {todos.filter((tf) => (tf.done == false)).map((tf) => (
                <ul className="flex gap-2" key={tf.id}>
                    <li>{tf.id}</li>
                    <li>{tf.todo}</li>
                </ul>
            ))}
        </>
    )
}