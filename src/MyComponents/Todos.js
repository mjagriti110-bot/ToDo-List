import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  const [filter, setFilter] = React.useState('all');

  const filtered = props.todos.filter(t => {
    if (filter === 'all') return true;
    if (filter === 'active') return !t.completed;
    return t.completed;
  });

  const total = props.todos.length;
  const remaining = props.todos.filter(t => !t.completed).length;
  const completed = total - remaining;

  return (
    <div className='container'>
      <div className="d-flex justify-content-between align-items-center my-3">
        <h3 className = "mb-0">My ToDos</h3>
        <div>
          <span className="badge bg-primary me-2">{total} total</span>
          <span className="badge bg-success me-2">{remaining} remaining</span>
          {completed > 0 && (
            <button className="btn btn-sm btn-outline-secondary" onClick={props.onClearCompleted}>Clear Completed</button>
          )}
        </div>
      </div>

      <div className="mb-3">
        <div className="btn-group" role="group" aria-label="filters">
          <button type="button" className={"btn btn-sm " + (filter==='all' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setFilter('all')}>All</button>
          <button type="button" className={"btn btn-sm " + (filter==='active' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setFilter('active')}>Active</button>
          <button type="button" className={"btn btn-sm " + (filter==='completed' ? 'btn-primary' : 'btn-outline-primary')} onClick={() => setFilter('completed')}>Completed</button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center">No todos match the selected filter.</p>
      ) : (
        filtered.map((todo) => {
          return <TodoItem todoItem={todo} key={todo.sno} onDelete={props.onDelete} onToggleComplete={props.onToggleComplete} />
        })
      )}
    </div>
    
  )
}

