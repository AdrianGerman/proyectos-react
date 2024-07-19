import { type User } from "../types.d"

interface Props {
  deleteUser: (email: string) => void
  showColors: boolean
  users: User[]
}

export function UserList({ deleteUser, showColors, users }: Props) {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>País</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          const style = index % 2 === 0 ? "#333" : "#555"
          const color = showColors ? style : "transparent"
          return (
            <tr key={user.email} style={{ backgroundColor: color }}>
              <td>
                <img src={user.picture.thumbnail} alt={user.name.title} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button onClick={() => deleteUser(user.email)}>Eliminar</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
