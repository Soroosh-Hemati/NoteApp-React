import AddNewNote from './components/AddNewNote'
import NoteList from './components/NoteList'
import './App.css'
import { useState } from 'react'
import NoteStatus from './components/NoteStatus';
import NoteHeader from './components/NoteHeader';

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState('latest')

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote])
  }

  const handleDeleteNote = (id) => setNotes((prevNotes) => prevNotes.filter((note) => note.id != id))

  const handleCheckNote = (event) => {
    const noteId = Number(event.target.value)
    setNotes((prevNotes) => prevNotes.map((note) => note.id == noteId ? { ...note, completed: !note.completed } : note))
  }

  let sortedNotes = notes
  if (sortBy == "earliest") sortedNotes = [...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
  if (sortBy == "latest") sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  if (sortBy == "completed") sortedNotes = [...notes].sort((a, b) => Number(a.completed) - Number(b.completed))
  return <div className='container'>
    <NoteHeader notes={notes} sortBy={sortBy} onSort={(event) => setSortBy(event.target.value)} />
    <div className="note-app">
      <AddNewNote onAddNote={handleAddNote} />
      <div className="note-container">
        <NoteStatus notes={notes} />
        <NoteList notes={sortedNotes} onDelete={handleDeleteNote} onCheck={handleCheckNote} />
      </div>
    </div>
  </div>

}

export default App
