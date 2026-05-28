import React from 'react'

export default function Home() {
  return (
    <section className="home-hero container my-4">
      <div className="p-4 rounded-3 shadow-sm bg-light">
        <h1 className="display-6">Welcome to My ToDos List</h1>
        <p className="lead">Organize your day, focus on what matters, and get more done. Add tasks, track progress, and clear completed items quickly.</p>
        <hr className="my-3" />
        <div className="row">
          <div className="col-md-6">
            <h5>Quick & Simple</h5>
            <p>Create tasks fast with short titles and notes. Use the Delete button to remove completed items.</p>
          </div>
          <div className="col-md-6">
            <h5>Lightweight</h5>
            <p>No account required — your tasks are stored locally in your browser for quick access.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
