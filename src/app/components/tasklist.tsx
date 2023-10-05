import Types from "../types/types";
import List from "./list";

export default function Tasklist() {

    let tasklist:Types[] = [
        {id: 0, todo: "a", done: false},
        {id: 1, todo: "b", done: false},
        {id: 2, todo: "c", done: false},
        {id: 3, todo: "d", done: false},
    ]

    return (
        <List list={tasklist}/>
    )
}