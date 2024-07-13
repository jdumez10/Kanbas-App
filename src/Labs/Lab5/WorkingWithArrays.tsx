import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithArrays() {
    const API = `${REMOTE_SERVER}/lab5/todos`;
    const [todo, setTodo] = useState({ id: "1" });
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newCompleted, setNewCompleted] = useState(false);

    return (
        <div id="wd-working-with-arrays">
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
                Get Todos
            </a>
            <hr />
            <h4>Retrieving an Item from an Array by ID</h4>
            <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>
            <input id="wd-todo-id" value={todo.id} className="form-control w-50" onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
            <hr />
            <h4>Filtering Array Items</h4>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary" href={`${API}?completed=true`}>
                Get Completed Todos
            </a>
            <hr />
            <h4>Creating new Items in an Array</h4>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary" href={`${API}/create`}>
                Create Todo
            </a>
            <hr />
            <h4>Deleting from an Array</h4>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary float-end" href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>
            <input value={todo.id} className="form-control w-50" onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
            <hr />
            <h4>Updating an Item in an Array</h4>
            <a href={`${API}/${todo.id}/title/${newTitle}`} className="btn btn-primary float-end">
                Update Todo Title
            </a>
            <input value={todo.id} className="form-control w-25 float-start me-2"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>
            <input value={newTitle} className="form-control w-50 float-start"
                onChange={(e) => setNewTitle(e.target.value)}/>
            <br /><br /><hr />
            
            <h4>Updating Todo Description</h4>
            <a href={`${API}/${todo.id}/description/${newDescription}`} className="btn btn-primary float-end">
                Update Description
            </a>
            <input value={todo.id} className="form-control w-25 float-start me-2"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>
            <input value={newDescription} className="form-control w-50 float-start"
                onChange={(e) => setNewDescription(e.target.value)}/>
            <br /><br /><hr />

            <h4>Updating Todo Completed Status</h4>
            <a href={`${API}/${todo.id}/completed/${newCompleted}`} className="btn btn-primary float-end">
                Update Completed Status
            </a>
            <input value={todo.id} className="form-control w-25 float-start me-2"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>
            <input type="checkbox" checked={newCompleted} className="form-check-input float-start"
                onChange={(e) => setNewCompleted(e.target.checked)}/>
            <br /><br /><hr />
        </div>
    );
}
