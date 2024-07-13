import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaPencil } from "react-icons/fa6";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [editingTodo, setEditingTodo] = useState<any>(null);

  const fetchTodos = async () => {
    try {
      const todos = await client.fetchTodos();
      setTodos(todos);
    } catch (error) {
      console.error("Failed to fetch todos", error);
      alert("Failed to fetch todos");
    }
  };

  const removeTodo = async (todo: any) => {
    try {
      const updatedTodos = await client.removeTodo(todo);
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Failed to remove todo", error);
      alert("Failed to remove todo");
    }
  };

  const deleteTodo = async (todo: any) => {
    try {
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
    } catch (error) {
      console.error("Failed to delete todo", error);
      alert("Failed to delete todo");
    }
  };

  const createTodo = async () => {
    const newTodo = { title: "New Task", completed: false };
    const updatedTodos = await client.createTodo(newTodo);
    setTodos(updatedTodos);
  };

  const postTodo = async () => {
    const newTodo = await client.postTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };

  const editTodo = (todo: any) => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...todo, editing: true } : { ...t, editing: false }
    );
    setEditingTodo(todo);
    setTodos(updatedTodos);
  };

  const saveTodo = async (todo: any) => {
    try {
      await client.updateTodo(todo);
      const updatedTodos = todos.map((t) => (t.id === todo.id ? todo : t));
      setEditingTodo(null);
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Failed to save todo", error);
      alert("Failed to save todo");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      <h4>
        Todos
        <FaPlusCircle
          onClick={createTodo}
          className="text-success float-end fs-3"
          id="wd-create-todo"
        />
        <FaPlusCircle
          onClick={postTodo}
          className="text-primary float-end fs-3 me-3"
          id="wd-post-todo"
        />
      </h4>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input
              type="checkbox"
              className="form-check-input me-2"
              defaultChecked={todo.completed}
              onChange={() => {}}
            />
            {todo.editing ? (
              <>
                <input
                  type="text"
                  value={editingTodo.title}
                  onChange={(e) =>
                    setEditingTodo({ ...editingTodo, title: e.target.value })
                  }
                  className="form-control me-2"
                />
                <button
                  onClick={() => saveTodo(editingTodo)}
                  className="btn btn-primary"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.title}
                </span>


                <FaTrash
                  onClick={() => removeTodo(todo)}
                  className="text-danger float-end mt-1 me-2"
                  id="wd-remove-todo"
                />
                <TiDelete
                  onClick={() => deleteTodo(todo)}
                  className="text-danger float-end me-2 fs-3"
                  id="wd-delete-todo"
                />
                <FaPencil
                  onClick={() => editTodo(todo)}
                  className="text-primary float-end mt-1 ms-2"
                  id="wd-edit-todo"
                />
              </>
            )}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
