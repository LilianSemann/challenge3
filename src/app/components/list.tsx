"use client"

import { useEffect, useState } from "react"

import Types from "../types/types"

export default function List(props:{list:Types[]}) {
    
    const [list, setList] = useState(props.list)
    
    const [newTodo, setNewTodo] = useState<Types>({
        id: list.length,
        todo: "",
        done: false
    })

    function add() {
        setList([...list, newTodo])
    }

    useEffect (() => {
        setNewTodo({...newTodo, id:list[list.length-1].id + 1})
    }, [list])

    function update(task:Types) {
        task.done = task.done === false ? true : false
        setList([...list])
    }
    
    function dlt(id: number) {
        const updatedList = list.filter(i => i.id !== id);
        setList(updatedList);
      }

    return (
        <section className="flex flex-col gap-3">
            <div className="rounded-lg px-2 border-black border">
                <input type="text" placeholder="Add a new task" onChange={(e) => setNewTodo({...newTodo, todo:e.target.value})} className="outline-none h-10"/>
                <button onClick={() => add()}>add</button>
            </div>
            
            <div>
                {list.map((t) => (
                    <ul key={t.id} className="flex justify-between py-1 px-2 even:bg-zinc-200">
                        <button onClick={() => update(t)} className={`${t.done ? 'line-through' : 'normal'} ${t.done ? 'text-gray-500' : 'text-gray-700'}`}>{t.id} {t.todo}</button>
                        <button onClick={() => dlt(t.id)}>X</button>
                    </ul>
                ))}
            </div>
        </section>
    )
}