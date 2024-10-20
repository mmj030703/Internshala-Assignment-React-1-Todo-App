/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function TodoInput({ setTodos }) {
    const [todoInput, setTodoInput] = useState("");

    function addTodo(e) {
        const todo = {
            id: (Math.random() * 100000000000000).toFixed(),
            task: todoInput,
            isCompleted: false
        }

        setTodos((state) => [...state, todo]);
        setTodoInput("");
    }

    return (
        <section className="flex w-full min-[600px]:w-[600px] gap-x-3 mt-3">
            <input
                type="text"
                placeholder="Enter your Todo"
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
                className="w-full py-2 ps-2 pe-4 rounded-sm outline-none"
            />
            <button onClick={addTodo} className="bg-white p-[5px] rounded-full">
                <FontAwesomeIcon icon={faPlusCircle} className="text-4xl text-sky-700" />
            </button>
        </section>
    )
}

export default TodoInput;