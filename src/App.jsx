import AddNewNote from './components/AddNewNote'
import NoteList from './components/NoteList'
import './App.css'
import { useState } from 'react'

function App() {
  const [notes, setNotes] = useState([]);
  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote])
  }
  const handleDeleteNote = (id) => setNotes((prevNotes) => prevNotes.filter((note) => note.id != id))
  const handleCheckNote = (event) => {
    const noteId = Number(event.target.value)
    setNotes((prevNotes) => prevNotes.map((note) => note.id == noteId ? { ...note, completed: !note.completed } : note))
  }
  return <div className='container'>
    <div className="note-header">note header</div>
    <div className="note-app">
      <AddNewNote onAddNote={handleAddNote} />
      <div className="note-container">
        <NoteList notes={notes} onDelete={handleDeleteNote} onCheck={handleCheckNote} />
      </div>
    </div>
  </div>

}

export default App
