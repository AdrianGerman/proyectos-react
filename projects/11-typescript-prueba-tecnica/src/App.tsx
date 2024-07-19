import { useEffect, useMemo, useRef, useState } from "react"
import "./App.css"
import { type User, SortBy } from "./types.d"
import { UserList } from "./components/UsersList"

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const originalUsers = useRef<User[]>([])
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

  useEffect(() => {
    fetch("https://randomuser.me/api?results=100")
      .then(async (res) => await res.json())
      .then((res) => {
        setUsers(res.results)
        originalUsers.current = res.results
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter((user) => {
          return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
        })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers
    if (sorting === SortBy.COUNTRY) {
      return filteredUsers.toSorted((a, b) => a.location.country.localeCompare(b.location.country))
    }
    if (sorting === SortBy.NAME) {
      return filteredUsers.toSorted((a, b) => a.name.first.localeCompare(b.name.first))
    }
    if (sorting === SortBy.LAST) {
      return filteredUsers.toSorted((a, b) => a.name.last.localeCompare(b.name.last))
    }
  }, [filteredUsers, sorting])

  return (
    <>
      <div>
        <h1>Prueba técnica</h1>
        <header>
          <button onClick={toggleColors}>Colorear filas</button>
          <button onClick={toggleSortByCountry}>
            {sorting === SortBy.COUNTRY ? "No ordenar por país" : "Ordenar por país"}
          </button>
          <button onClick={handleReset}>Resetear estado</button>
          <input
            placeholder="Filtrar por país"
            onChange={(e) => {
              setFilterCountry(e.target.value)
            }}
          />
        </header>
        <main>
          <UserList
            changeSorting={handleChangeSort}
            deleteUser={handleDelete}
            showColors={showColors}
            users={sortedUsers}
          />
        </main>
      </div>
    </>
  )
}

export default App
