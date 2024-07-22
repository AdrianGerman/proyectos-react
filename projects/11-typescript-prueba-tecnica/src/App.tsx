import { useMemo, useState } from "react"
import "./App.css"
import { type User, SortBy } from "./types.d"
import { UserList } from "./components/UsersList"
import { useInfiniteQuery } from "@tanstack/react-query"

const fetchUsers = async ({ pageParam = 1 }: { pageParam?: number }) => {
  return await fetch(`https://randomuser.me/api?results=10&seed=heim&page=${pageParam}`)
    .then(async (res) => {
      if (!res.ok) throw new Error("Error en la petición")
      return await res.json()
    })
    .then((res) => {
      const currentPage = Number(res.info.page)
      const nextCursor = currentPage > 10 ? undefined : currentPage + 1
      return {
        users: res.results,
        nextCursor
      }
    })
}

// .then((res) => ({
//   users: res.results,
//   nextCursor: res.info.page + 1
// }))

function App() {
  const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor
  })

  console.log('data ----->', data);
  const users: User[] = data?.pages?.flatMap(page => page.users) ?? []

  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleReset = () => {
    refetch()
  }

  const handleDelete = () => {
    // email: string
    // const filteredUsers = users.filter((user) => user.email !== email)
    // setUsers(filteredUsers)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

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
          {isLoading && <strong>Cargando...</strong>}
          {!isLoading && isError && <p>Ha ocurrido un error inesperado</p>}
          {!isLoading && !isError && users.length === 0 && <p>No se han encontrado resultados</p>}
          {!isLoading && !isError && hasNextPage === true && (
            <button onClick={() => { void fetchNextPage() }}>Cargar más resultados</button>
          )}
        </main>
      </div>
    </>
  )
}

export default App
