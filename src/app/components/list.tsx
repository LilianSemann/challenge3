"use client"

import { useState } from "react"

import Types from "../types/types"

export default function List() {
    
    const [list, setList] = useState<Types>({
        id: 0,
        todo: "",
        done: false
    })
    
    const [newList, setNewList] = useState<Types>({
        id: 0,
        todo: "",
        done: false
    })

    return (
        <>
            <form>
                <input type="text" placeholder="Add a new task" onChange={(e) => setList({...list, todo:e.target.value})}/>
                <button>add</button>
            </form>
            <div>
            </div>
        </>
    )
}