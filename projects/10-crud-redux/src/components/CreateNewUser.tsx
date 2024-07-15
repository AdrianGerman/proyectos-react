import { Button, Card, TextInput, Title } from "@tremor/react"

export function CreateNewUser() {
  return (
    <Card>
      <Title>Create new user</Title>
      <form className="">
        <TextInput placeholder="name" />
        <TextInput placeholder="email" />
        <TextInput placeholder="github user" />

        <div>
          <Button type="submit">Create</Button>
        </div>
      </form>
    </Card>
  )
}
