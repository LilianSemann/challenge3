import TodoTypes from "../types/types";

export function insertTodo( todo: TodoTypes, todos: TodoTypes[] ) {
    return [...todos, todo]
}

export function updateTodo() {

}
