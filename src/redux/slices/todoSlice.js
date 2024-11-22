import { createSlice } from "@reduxjs/toolkit";

// TODO: 로컬스토리지에 최신상태를 동기화 해서, 새로고침 시에도 상태가 유지되도록 해보세요.
const loadFromLocalStorage = () => {
  const data = localStorage.getItem("todos");
  return JSON.parse(data) ?? [];
};

const saveToLocalStorage = (state) => {
  localStorage.setItem("todos", JSON.stringify(state.todoList));
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: loadFromLocalStorage(),
  },
  reducers: {
    addTodo: (state, action) => {
      // TODO: 투두 추가 상태변경 해보세요.
      const valueToAdd = action.payload;
      state.todoList.push(valueToAdd);
      saveToLocalStorage(state);
    },
    deleteTodo: (state, action) => {
      // TODO: 투두 삭제 상태변경 해보세요.
      const valueToDelete = action.payload;
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== valueToDelete
      );
      saveToLocalStorage(state);
    },
    toggleTodo: (state, action) => {
      // TODO: 투두의 isDone 속성값(boolean)을 토글링하도록 상태변경 해보세요.
      const valueToToggle = action.payload;
      const todo = state.todoList.find((todo) => todo.id === valueToToggle);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
