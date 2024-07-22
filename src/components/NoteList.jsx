
function NoteList({ notes, onDelete, onCheck }) {
    return (
        <div className="note-list">
            {
                notes.map(note => <NoteItem key={note.id} note={note} onDelete={onDelete} onCheck={onCheck} />)
            }
        </div>
    )
}

export default NoteList

function NoteItem({ note, onDelete, onCheck }) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return <div key={note.id} className={`note-item ${note.completed ? "completed" : ''}`}>
        <div className="note-item__header">
            <div>
                <p className="title">{note.title}</p>
                <p className="description">{note.description}</p>
            </div>
            <div className="actions">
                <button className="btn--secondary" onClick={() => onDelete(note.id)}>Delete</button>
                <input type="checkbox" 
                name={note.id} 
                id={note.id} 
                value={note.id} 
                onChange={onCheck} 
                checked={note.completed} />
            </div>
        </div>
        <div className="note-item__footer">
            {new Date(note.createdAt).toLocaleDateString('en-US', options)}
        </div>
    </div>
}