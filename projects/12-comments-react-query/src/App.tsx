import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getComments, postComment, type CommentWidthId } from "./services/comments"
import { FormInput, FormTextArea } from "./components/Form"
import { Results } from "./components/Results"
import "./App.css"

function App() {
  const { data, isLoading, error } = useQuery<CommentWidthId[]>({
    queryKey: ["comments"],
    queryFn: getComments
  })

  const queryClient = useQueryClient()

  // aquí se usaría usLoading pero en la v5 fue cambiado a isPending
  const { mutate, isPending: isLoadingMutation } = useMutation({
    mutationFn: postComment,
    onMutate: async (newComment) => {
      await queryClient.cancelQueries({ queryKey: ["comments"] })

      const previousComments = queryClient.getQueryData(["comments"])

      queryClient.setQueryData(["comments"], (oldData?: Comment[]) => {
        if (oldData == null) return [newComment]
        return [...oldData, newComment]
      })
      return { previousComments }
    },

    onError: (error, variables, context) => {
      console.error(error)
      if (context?.previousComments !== null) {
        queryClient.setQueryData(["comments"], context?.previousComments)
      }
    },

    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["comments"]
      })
    }
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (isLoadingMutation) return
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = data.get("message")?.toString() ?? ""
    const title = data.get("title")?.toString() ?? ""

    if (title !== "" && message !== "") {
      mutate({ title, message })
    }
  }

  return (
    <>
      <main className="grid h-screen grid-cols-2">
        <div className="col-span-1 bg-white p-8">
          {isLoading && <strong>Cargando....</strong>}
          {error !== null && <strong>Upss, algo no ha salido del todo bien :o</strong>}
          <Results data={data} />
        </div>
        <div className="col-span-1 bg-black p-8">
          <form
            className={`${isLoadingMutation ? "opacity-40" : ""} block max-w-xl px-4 m-auto`}
            onSubmit={handleSubmit}
          >
            <FormInput />
            <FormTextArea />
            <button
              disabled={isLoadingMutation}
              type="submit"
              className="mt-4 px-12 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center mr-2 mb-2"
            >
              {isLoadingMutation ? "Enviando comentario..." : "Enviar comentario"}
            </button>
          </form>
        </div>
      </main>
    </>
  )
}

export default App
