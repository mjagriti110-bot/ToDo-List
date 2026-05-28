import React from 'react'

export const TodoItem = ({ todoItem, onDelete, onToggleComplete }) => {
  return (
    <div className={"card my-2 todo-card p-3 " + (todoItem.completed ? 'completed' : '')}>
      <div className="d-flex justify-content-between align-items-start">
        <div className="d-flex align-items-start">
          <input className="form-check-input me-3 mt-1" type="checkbox" checked={!!todoItem.completed} onChange={() => onToggleComplete(todoItem.sno)} />
          <div>
            <h5 className="todo-title mb-1">{todoItem.title}</h5>
            <p className="todo-desc mb-0">{todoItem.desc}</p>
          </div>
        </div>
        <div className="ms-3 d-flex flex-column align-items-end">
          <button className="btn btn-sm btn-outline-danger mb-2" onClick={() => onDelete(todoItem)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
