import IList from "../types/typelist";
import List from "./list";

export default function Tasklist() {

    let tasklist:IList[] = [
        {id: 0, todo: "aaa", done: false},
        {id: 1, todo: "bbb", done: false},
        {id: 2, todo: "ccc", done: true},
        {id: 3, todo: "ddd", done: false}
    ]

    return (
        <List list={tasklist}/>
    )
}