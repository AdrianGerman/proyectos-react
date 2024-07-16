import { Button, Card, TextInput, Title } from "@tremor/react"
import { useUserActions } from "../hooks/useUserActions"
import React from "react"

export function CreateNewUser() {
  const { addUser } = useUserActions()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const github = formData.get("github") as string

    addUser({ name, email, github })
  }

  return (
    <Card className="rounded-lg">
      <Title>Create new user</Title>
      <form onSubmit={handleSubmit} className="">
        <TextInput name="name" placeholder="name" />
        <TextInput name="email" placeholder="email" />
        <TextInput name="github" placeholder="github user" />

        <div>
          <Button type="submit">Create</Button>
        </div>
      </form>
    </Card>
  )
}
