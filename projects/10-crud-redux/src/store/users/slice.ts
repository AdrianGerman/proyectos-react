import { createSlice } from "@reduxjs/toolkit"

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: string
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
  reducers: {}
})

export default usersSlice.reducer
