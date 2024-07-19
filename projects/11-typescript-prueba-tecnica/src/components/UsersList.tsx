import { type User } from "../types.d"
import "../App.css"

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
      <tbody className={showColors ? "table--showColors" : "table"}>
        {users.map((user) => {
          return (
            <tr key={user.email}>
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
