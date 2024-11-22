import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/slices/todoSlice";
import { useCallback } from "react";

export default function useTodo() {
  const dispatch = useDispatch();
  // TODO: 1. 커스텀훅을 완성해 주세요.
  // TODO: 2. 반환되는 함수들은 memoization 적용해 주세요.
  const toggleTodoItem = useCallback(
    (id) => {
      // TODO: 리덕스 reducer 로 상태변경 해보세요.
      // 토글
      dispatch(toggleTodo(id));
    },
    [dispatch]
  );

  // 삭제
  const deleteTodoItem = useCallback(
    (id) => {
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  return { toggleTodoItem, deleteTodoItem };
}
