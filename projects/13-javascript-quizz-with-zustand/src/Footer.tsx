import { Button } from "@mui/material"
import { useQuestionData } from "./hooks/useQuestionsData"
import { useQuestionsStore } from "./store/question"

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionData()
  const reset = useQuestionsStore((state) => state.reset)

  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>{`✅ ${correct} Correctas - ❌ ${incorrect} Incorrectas - ❓ ${unanswered} Sin responder`}</strong>
      <div style={{ marginTop: "16px" }}>
        <Button onClick={() => reset()}>Resetear juego</Button>
      </div>
    </footer>
  )
}
