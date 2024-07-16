import "./App.css"
import { ListOfUsers } from "./components/ListOfUsers"
import { CreateNewUser } from "./components/CreateNewUser"

function App() {
  return (
    <>
      <main>
        <h1>CRUD Redux</h1>
        <ListOfUsers />
        <CreateNewUser />
      </main>
    </>
  )
}

export default App
