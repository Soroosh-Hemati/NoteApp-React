
function NoteHeader({notes,sortBy,onSort}) {
  return (
    <div className="note-header">
        <h2>My notes ({notes.length})</h2>
        <select value={sortBy} onChange={onSort}>
            <option value="latest">Sort notes based on latest</option>
            <option value="earliest">Sort notes based on earliest</option>
            <option value="compeleted">Sort notes based on completed</option>
        </select>
    </div>
  )
}

export default NoteHeader