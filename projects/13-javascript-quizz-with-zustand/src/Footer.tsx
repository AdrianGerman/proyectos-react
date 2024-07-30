import { useQuestionData } from "./hooks/useQuestionsData"

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionData()

  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>{`✅ ${correct} Correctas - ❌ ${incorrect} Incorrectas - ❓ ${unanswered} Sin responder`}</strong>
    </footer>
  )
}
