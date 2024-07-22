import { useState } from "react";


function AddNewNote({onAddNote}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!title || !description) return null
        const newNote = {
            title,
            description,
            id: Date.now(),
            Completed: false,
            createdAt: new Date().toISOString()
        }
        onAddNote(newNote)
        setTitle('')
        setDescription('')
    }
    
    return (
        <div className="add-new-note">
            <h2>Add New Note</h2>
            <form className='note-form' onSubmit={handleSubmit}>
                <input type="text" placeholder='Note Title...' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder='Note Description...' value={description} className='note-desc-input' onChange={(e) => setDescription(e.target.value)} />
                <button className='btn btn--primary'>Add New Note</button>
            </form>
        </div>
    )
}

export default AddNewNote