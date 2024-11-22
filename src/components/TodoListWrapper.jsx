import TodoList from "./TodoList";

export default function TodoListWrapper() {
  return (
    <>
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </>
  );
}
