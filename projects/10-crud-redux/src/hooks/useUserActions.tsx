import { addNewUser, deleteUserById, UserId } from "../store/users/slice"
import { useAppDispatch } from "./store"
import { User } from "../store/users/slice"

export const useUserActions = () => {
  const dispatch = useAppDispatch()

  const addUser = (user: User) => {
    dispatch(addNewUser(user))
  }
  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }
  return { addUser, removeUser }
}
