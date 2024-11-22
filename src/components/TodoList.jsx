import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import useTodo from "../hooks/useTodo";

export default function TodoList({ isDone }) {
  // TODO: 비즈니스로직 부분을 커스텀훅으로 변경해 보세요. src/hooks/useTodo.js 준비되어 있습니다.
  const todos = useSelector((state) => state.todo.todoList);
  const { toggleTodoItem, deleteTodoItem } = useTodo();
  const filteredTodos = todos.filter((todo) => todo.isDone === isDone);

  return (
    <>
      <h2>{isDone ? "Done" : "Wokring..."}</h2>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodoItem={toggleTodoItem}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </ul>
    </>
  );
}
