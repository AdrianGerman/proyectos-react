import {
  BadgeDelta,
  Card,
  DeltaType,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow
} from "@tremor/react"

const users: {
  id: string
  name: string
  email: string
  github: string
}[] = [
  {
    id: "1",
    name: "Eladrino",
    email: "eladrianoveloz@gmail.com",
    github: "ElAdriano"
  },
  {
    id: "2",
    name: "Jacquie Blanca",
    email: "julinadaotod@gmail.com",
    github: "JacquiesLore"
  },
  {
    id: "3",
    name: "Liz Rodriguez",
    email: "lizlopez@gmail.com",
    github: "LizArciniega"
  },
  {
    id: "4",
    name: "Evalionte Lopez",
    email: "elvistek@gmail.com",
    github: "Elatonimiteca"
  }
]

export function ListOfUsers() {
  return (
    <Card className="rounded-lg">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Correo</TableHeaderCell>
            <TableHeaderCell>Acciones</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
