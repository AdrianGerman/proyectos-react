import { useState } from "react";
import { Todos } from "./components/Todos";

const mockTodos = [
  {
    id: "1",
    title: "Ver la web de React",
    completed: true
  },
  {
    id: "2",
    title: "Aprender a dejar de hacer webs con el fondo white",
    completed: false
  },
  {
    id: "3",
    title: "Buscar la temporada de huracanes",
    completed: false
  }
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Todos onRemoveTodo={handleRemove} todos={todos} />
    </div>
  );
};

export default App;
