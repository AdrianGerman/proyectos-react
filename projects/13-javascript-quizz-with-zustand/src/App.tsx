import { Container, Stack, Typography } from "@mui/material"
import { JavaScriptLogo } from "./JavaScriptLogo"
import "./App.css"

function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
          <JavaScriptLogo />
          <Typography variant="h2" component="h1">
            JavaScript Quizz
          </Typography>
        </Stack>
      </Container>
    </>
  )
}

export default App
