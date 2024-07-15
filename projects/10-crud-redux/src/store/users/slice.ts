import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export type UserId = string

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: UserId
}

const initialState: UserWithId[] = [
  {
    id: "1",
    name: "Eladrino",
    email: "eladrianoveloz@gmail.com",
    github: "ElAdriano"
  },
  {
    id: "2",
    name: "Jacquie Blanca",
    email: "julinadaotod@gmail.com",
    github: "Jacquie"
  },
  {
    id: "3",
    name: "Liz Rodriguez",
    email: "lizlopez@gmail.com",
    github: "Liz"
  },
  {
    id: "4",
    name: "Evalionte Lopez",
    email: "elvistek@gmail.com",
    github: "elvistek"
  }
]

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload
      return state.filter((user) => user.id !== id)
    }
  }
})

export default usersSlice.reducer

export const { deleteUserById } = usersSlice.actions
