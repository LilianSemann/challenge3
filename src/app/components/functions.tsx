import Types from "../types/types"

export function insert(task:Types, tasklist:Types[]) {
    return [...tasklist, task]
}