import { Badge, Button, Card, TextInput, Title } from "@tremor/react"
import { useUserActions } from "../hooks/useUserActions"
import { useState } from "react"

export function CreateNewUser() {
  const { addUser } = useUserActions()
  const [result, setResult] = useState<"ok" | "ko" | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const github = formData.get("github") as string

    if (!name || !email || !github) {
      return setResult("ko")
    }

    addUser({ name, email, github })
    setResult("ok")
    form.reset()
  }

  return (
    <Card className="bg-backgroundBlack">
      <Title className="text-white">Crear usuarios</Title>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
        <TextInput name="name" placeholder="Nombre" />
        <TextInput name="email" placeholder="Correo electrónico" />
        <TextInput name="github" placeholder="Usuario github" />

        <div>
          <Button type="submit" className="mt-4 mr-4">
            Crear
          </Button>
          <span>{result === "ok" && <Badge color="green">Guardado correctamente</Badge>}</span>
          <span>{result === "ko" && <Badge color="red">Error con los campos</Badge>}</span>
        </div>
      </form>
    </Card>
  )
}
