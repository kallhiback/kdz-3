import './App.css'
import React from "react"

function TodoList() {
    const todo = () => {
        const input = document.getElementById("Input")
        const taskText = input.value.trim()
        if (taskText !== "") {
            const List = document.getElementById("List")
            const newTask = document.createElement("li")
            newTask.textContent = taskText
            List.appendChild(newTask)
            input.value = ""
        }
    }

    return (
        <div className="wrapper">
            <div className="todo-list">
                <h1>Todo</h1>
                <div className="task-input">
                    <input
                        id="Input"
                        type="text"
                        placeholder="Впиши что-то"
                    />
                    <button onClick={todo} className="btn">Нажми</button>
                </div>
                <div className="tasks">
                    <ul id="List"></ul>
                </div>
            </div>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <TodoList />
        </div>
    )

}

export default App
