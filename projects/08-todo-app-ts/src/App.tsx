import { useState } from "react";
import { Todos } from "./components/Todos";
import { FilterValue, TodoId, type Todo as TodoType } from "./types";
import { TODO_FILTERS } from "./consts";
import { Footer } from "./components/Footer";

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({ id, completed }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  return (
    <div className="todoapp">
      <Todos onToggleCompletedTodo={handleCompleted} onRemoveTodo={handleRemove} todos={todos} />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={() => {}}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;