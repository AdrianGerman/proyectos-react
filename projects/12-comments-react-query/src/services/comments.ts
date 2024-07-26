export interface Comment {
  title: string
  message: string
}

export interface CommentWidthId extends Comment {
  id: string
}

export const getComments = async () => {
  const response = await fetch("https://api.jsonbin.io/v3/b/66a28152e41b4d34e416fc3e", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Access-Key": import.meta.env.VITE_API_KEY
    }
  })

  if (!response.ok) {
    throw new Error("Failed to fetch comments.")
  }
  const json = await response.json()
  return json?.record
}

export const postComment = async (comment: Comment) => {
  const comments = await getComments()

  const id = crypto.randomUUID()
  const newComment = { ...comment, id }
  const commentsToSave = [...comments, newComment]

  const response = await fetch("https://api.jsonbin.io/v3/b/66a28152e41b4d34e416fc3e", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Access-Key": import.meta.env.VITE_API_KEY
    },
    body: JSON.stringify(commentsToSave)
  })

  if (!response.ok) {
    throw new Error("Failed to post comments.")
  }
  return newComment
}
