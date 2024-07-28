import { Container, Stack, Typography } from "@mui/material"
import { JavaScriptLogo } from "./JavaScriptLogo"
import "./App.css"
import { Start } from "./Start"
import { useQuestionsStore } from "./store/question"

function App() {
  const questions = useQuestionsStore((state) => state.questions)
  console.log(questions)

  return (
    <>
      <Container maxWidth="sm">
        <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
          <JavaScriptLogo />
          <Typography variant="h2" component="h1">
            JavaScript Quizz
          </Typography>
        </Stack>

        {questions.length === 0 && <Start />}
        {questions.length > 0 && <h4>El juego a comenzado</h4>}
      </Container>
    </>
  )
}

export default App
