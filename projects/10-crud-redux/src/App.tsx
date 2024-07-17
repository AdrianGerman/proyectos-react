import "./App.css"
import { ListOfUsers } from "./components/ListOfUsers"
import { CreateNewUser } from "./components/CreateNewUser"
import { Toaster } from "sonner"

function App() {
  return (
    <>
      <main>
        <h1 className="text-2xl border-b pb-1">CRUD Redux</h1>
        <ListOfUsers />
        <CreateNewUser />
        <Toaster richColors />
      </main>
    </>
  )
}

export default App
