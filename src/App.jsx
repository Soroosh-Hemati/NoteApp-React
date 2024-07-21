import AddNewNote from './components/AddNewNote'
import './App.css'

function App() {
  return <div className='container'>
    <div className="note-header">note header</div>
    <div className="note-app">
      <AddNewNote></AddNewNote>
      <div className="note-container">note container</div>
    </div>
  </div>

}

export default App
