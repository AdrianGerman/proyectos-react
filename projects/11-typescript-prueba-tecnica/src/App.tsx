import { useEffect, useState } from "react"
import "./App.css"
import { type User } from "./types"
import { UserList } from "./components/UsersList"

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)

  const toggleColors = () => {
    setShowColors(!showColors)
  }
  useEffect(() => {
    fetch("https://randomuser.me/api?results=100")
      .then(async (res) => await res.json())
      .then((res) => {
        setUsers(res.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <div>
        <h1>Prueba técnica</h1>
        <header>
          <button onClick={toggleColors}>Colorear filas</button>
        </header>
        <main>
          <UserList showColors={showColors} users={users} />
        </main>
      </div>
    </>
  )
}

export default App
