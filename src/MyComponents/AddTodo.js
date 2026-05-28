import React from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = React.useState("");
    const [desc, setDesc] = React.useState("");

    const submit = (e) => {
        e.preventDefault();
        if (title.trim() === "" || desc.trim() === "") {
            alert("Please fill in both title and description");
            return;
        }
        props.onAddTodo({ title, desc });
        setTitle("");
        setDesc("");
    };


  return (
    <div>
      <div className='container my-3'>
        <h3 className='text-center'>Add a ToDo</h3>
      </div>
      <div>
        <form onSubmit={submit} className='container my-3'  >
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" aria-describedby="titleHelp" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <div id="titleHelp" className="form-text">Enter a title for your todo.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description</label>
            <input type="text" className="form-control" id="desc" aria-describedby="descHelp" value={desc} onChange={(e) => setDesc(e.target.value)}/>
            <div id="descHelp" className="form-text">Enter a description for your todo.</div>
          </div>
          <button type="submit" className="btn btn-sm btn-success">Submit</button>
        </form>
      </div>
    </div>
  )
}
