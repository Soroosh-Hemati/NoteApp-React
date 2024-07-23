import Message from "./Message";

function NoteStatus({notes}) {
  const allNotes = notes.length;
  const completedNotes = notes.filter((note)=>note.completed).length
  const openedNotes = notes.filter((note)=>!note.completed).length
  if(!allNotes) return <Message text='No notes has been added  :('/>
  return (
    <ul className="note-status">
        <li>All<span>{allNotes}</span></li>
        <li>Completed<span>{completedNotes}</span></li>
        <li>Opened<span>{openedNotes}</span></li>
    </ul>
  )
}

export default NoteStatus