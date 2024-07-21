import React from 'react'

function AddNewNote() {
  return (
    <div className="add-new-note">
        <h2>Add New Note</h2>
        <form action="" className='note-form'>
            <input type="text" placeholder='Note Title...' />
            <input type="text" placeholder='Note Description...' className='note-desc-input'/>
            <button className='btn--primary'>Add New Note</button>
        </form>
      </div>
  )
}

export default AddNewNote