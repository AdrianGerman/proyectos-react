// import { IconButton, Stack } from "@mui/material"
import { Card, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import { useQuestionsStore } from "./store/question"
import { type Question as QuestionType } from "./types.d"
import SyntaxHighlighter from "react-syntax-highlighter"
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

const getBackgroundColor = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info
  // usuario aun no ha seleccionado nada
  if (userSelectedAnswer == null) return "transparent"
  // si ya selecciono pero la solución es incorrecta
  if (index !== correctAnswer && index !== userSelectedAnswer) return "transparent"
  // si selecciono la respuesta correcta
  if (index === correctAnswer) return "green"
  // si selecciono la respuesta pero no es correcta
  if (index === userSelectedAnswer) return "red"
  // si no es ninguna de las anteriores
  return "transparent"
}

const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer)

  const createHandleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex)
  }

  return (
    <Card variant="outlined" sx={{ bgcolor: "#222", p: 2, textAlign: "left", marginTop: 4 }}>
      <Typography variant="h5">{info.question}</Typography>
      <SyntaxHighlighter language="javascript" style={gradientDark}>
        {info.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: "#333" }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              disabled={info.userSelectedAnswer != null}
              onClick={createHandleClick(index)}
              sx={{ backgroundColor: getBackgroundColor(info, index) }}
            >
              <ListItemText primary={answer} sx={{ textAlign: "center" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

export const Game = () => {
  const questions = useQuestionsStore((state) => state.questions)
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)

  console.log(questions)

  const questionInfo = questions[currentQuestion]

  return (
    <>
      <Question info={questionInfo} />
    </>
  )
}
