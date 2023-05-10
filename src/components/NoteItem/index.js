// Write your code here

const NoteItem = props => {
  const {noteList} = props
  const emptyNote = () => {
    console.log('')
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
          alt="notes empty"
        />
        <h1>No Notes Yet</h1>
        <p>Notes you add will appear here</p>
      </div>
    )
  }

  return (
    <div>
      {noteList.length > 0 ? (
        <ul>
          {noteList.map(eachNote => (
            <li key={eachNote.id}>
              <h1>{eachNote.title}</h1>
              <p>{eachNote.note}</p>
            </li>
          ))}
        </ul>
      ) : (
        emptyNote()
      )}
    </div>
  )
}
export default NoteItem
