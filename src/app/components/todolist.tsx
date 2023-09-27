"use client"

import { useState } from "react"

import TodoTypes from "../types/types" 
import { insertTodo } from "./functions"


export default function TodoList(props:{todos:TodoTypes[]}) {

    const [todos, setTodos] = useState(props.todos)

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