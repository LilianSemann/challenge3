"use client"

import { useEffect, useState } from "react"

import IList from "../types/typelist"

export default function List(props:{list:IList[]}) {
    
    const [list, setList] = useState(props.list)
    
    const [newTodo, setNewTodo] = useState<IList>({
        id: list.length,
        todo: "",
        done: false
    })

    function add() {
        setList([...list, newTodo])
    }

    function toggle(task: IList) {
        task.done = !task.done
        setList([...list])
    }
    
    function dlt(id: number) {
        const updatedList = list.filter(i => i.id !== id);
        setList(updatedList)
    }

    function upd(id: number, newValue: string) {
        const updList = list.map((t) =>
            t.id === id && t.done === false ? { ...t, todo: newValue } : t
        );
        setList(updList);
      }
    
    useEffect (() => {
        setNewTodo({...newTodo, id:list[list.length-1].id + 1})
    }, [list])
    
    
    return (
        <section className="flex flex-col gap-3">
            <div className="rounded-lg px-2 border-black border">
                <input type="text" placeholder="Add a new task" onChange={(e) => setNewTodo({...newTodo, todo:e.target.value})} className="outline-none h-10 w-[90%]"/>
                <button onClick={() => add()} className="w-[10%]">add</button>
            </div>
            
            <div>
                {list.map((t) => (
                    <ul key={t.id} className="flex py-1 px-2 even:bg-zinc-200 items-center">
                        <input type="checkbox" defaultChecked={t.done} onClick={() => toggle(t)} className="w-[10%] h-3"/>
                        <input value={t.todo} onChange={(e) => upd(t.id, e.target.value)}
                            style={t.done ? {textDecorationLine: "line-through", color: "rgb(107 114 128)"} : {textDecorationLine: "none", color: "rgb(55 65 81)"}}
                            className='w-[80%] text-start bg-transparent capitalize outline-none'/>
                        <button onClick={() => dlt(t.id)} className="w-[10%]">x</button>
                    </ul>
                ))}
            </div>
        </section>
    )
}