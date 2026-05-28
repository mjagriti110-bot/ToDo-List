import React from 'react'

export default function About() {
  return (
    <section className="about container my-4">
      <div className="p-4 rounded-3 shadow-sm bg-white">
        <h2>About This App</h2>
        <p>This is a small, example ToDo app built with React and Bootstrap. It demonstrates basic component structure, local storage persistence, and client-side routing.</p>
        <h5>Features</h5>
        <ul>
          <li>Add and remove todos</li>
          <li>Persistent storage using localStorage</li>
          <li>Responsive layout with Bootstrap</li>
        </ul>
        <h5>Contact</h5>
        <p>If you want to enhance the app, open an issue or contribute improvements.</p>
      </div>
    </section>
  )
}
