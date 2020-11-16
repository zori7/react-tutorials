import React, {useEffect, useState} from 'react'
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import {ITodo} from "../interfaces";


const DEFAULT_SAVED_TODOS = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]

export const TodosPage: React.FC = () => {
    const [list, setList] = useState<ITodo[]>(DEFAULT_SAVED_TODOS)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(list));
    }, [list])

    const addHandler = (title: string): void => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false,
        }
        setList(state => [newTodo, ...state])
    }

    const toggleHandler = (id: number) => {
        setList(state => state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }

            return todo
        }))
    }
    const removeHandler = (id: number) => {
        const shouldRemove = window.confirm('Are you sure?')
        if (!shouldRemove) return

        setList(state => state.filter(todo => todo.id !== id))
    }

    return (
        <>
            <div className="container">
                <TodoForm onAdd={addHandler} />
            </div>
            <TodoList todos={list} onToggle={toggleHandler} onRemove={removeHandler}/>
        </>
    )
}
