import { useEffect, useMemo, useRef, useState } from "react"
import "./App.css"
import { type User, SortBy } from "./types.d"
import { UserList } from "./components/UsersList"

const fetchUsers = async (page: number) => {
  return await fetch(`https://randomuser.me/api?results=10&seed=heim&page=${page}`)
    .then(async (res) => {
      if (!res.ok) throw new Error("Error en la petición")
      return await res.json()
    })
    .then((res) => res.results)
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const originalUsers = useRef<User[]>([])
  const [filterCountry, setFilterCountry] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

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
    setLoading(true)
    setError(false)

    fetchUsers(currentPage)
      .then((users) => {
        setUsers((prevUsers) => {
          const newUsers = prevUsers.concat(users)
          originalUsers.current = newUsers
          return newUsers
        })
      })
      .catch((err) => {
        setError(err)
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [currentPage])

  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter((user) => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers

    const compareProperties: Record<string, (user: User) => any> = {
      [SortBy.COUNTRY]: (user) => user.location.country,
      [SortBy.NAME]: (user) => user.name.first,
      [SortBy.LAST]: (user) => user.name.last
    }

    return filteredUsers.toSorted((a, b) => {
      const extractProperty = compareProperties[sorting]
      return extractProperty(a).localeCompare(extractProperty(b))
    })
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
            className="filter-input"
            placeholder="Filtrar por país"
            onChange={(e) => {
              setFilterCountry(e.target.value)
            }}
          />
        </header>

        <main>
          {users.length > 0 && (
            <UserList
              changeSorting={handleChangeSort}
              deleteUser={handleDelete}
              showColors={showColors}
              users={sortedUsers}
            />
          )}
          {loading && <strong>Cargando...</strong>}
          {!loading && error && <p>Ha ocurrido un error inesperado</p>}
          {!loading && !error && users.length === 0 && <p>No se han encontrado resultados</p>}
          {!loading && !error && (
            <button onClick={() => setCurrentPage(currentPage + 1)}>Cargar más resultados</button>
          )}
        </main>
      </div>
    </>
  )
}

export default App
