import { useState, useRef } from 'react'

function App() {
  const [job, setJob] = useState("")
  const [jobs, setJobs] = useState([])
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState("")
  const refJob = useRef()

  const addJob = () => {
    if (job.trim() === "") return
    setJobs([...jobs, { id: Date.now(), name: job }])
    setJob("")
    refJob.current.focus()
  }

  const deleteJob = (id) => {
    setJobs(jobs.filter(item => item.id !== id))
  }

  const startEdit = (id, name) => {
    setEditId(id)
    setEditText(name)
  }

  const saveEdit = (id) => {
    setJobs(jobs.map(item => (item.id === id ? { ...item, name: editText } : item)))
    setEditId(null)
  }

  return (
    <div style={{ padding: 50 }}>
      <input
        type="text"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        ref={refJob}
      />
      <button onClick={addJob}>Thêm công việc</button>
      <br />
      {jobs.map(item => (
        <div key={item.id}  >
          {editId === item.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => saveEdit(item.id)}>Lưu</button>
            </>
          ) : (
            <>
              <span>{item.name}</span>
              <button onClick={() => deleteJob(item.id)}>Xóa</button>
              <button onClick={() => startEdit(item.id, item.name)}>Cập Nhật</button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default App
