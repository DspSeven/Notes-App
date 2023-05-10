// Write your code here
import {useState} from 'react'
import {v4 as uuid} from 'uuid'
import {NotesContainer} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [noteList, setNoteList] = useState([])
  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuid(),
      title,
      note,
    }
    setNoteList(prevNote => [...prevNote, newNote])
    setTitle('')
    setNote('')
  }
  const onAddTitle = event => {
    setTitle(event.target.value)
  }
  const updateNote = event => {
    setNote(event.target.value)
  }
  console.log(noteList)
  return (
    <div>
      <div>
        <NotesContainer>Notes</NotesContainer>
        <form onSubmit={onAddNote}>
          <input
            type="text"
            value={title}
            onChange={onAddTitle}
            placeholder="Title"
          />
          <br />
          <textarea
            value={note}
            onChange={updateNote}
            placeholder="Take a Note..."
          />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
      <NoteItem noteList={noteList} />
    </div>
  )
}
export default Notes
