import { useUsers } from "../hook/useUsers";


export const Results = () => {
    const { users } = useUsers()

    return <h3>Resultados =&gt; {users.length}</h3>
}