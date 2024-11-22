import { useRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, subtractNumber } from "./redux/slices/calculatorSlice";

// TODO:
// 1. 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
// 2. useRef 를 사용해서 input value 에 접근할 수 있게 해서 비제어 컴포넌트로 처리해 보세요.

// useRef 가 어렵다면 useState 를 사용해서 input value를 관리하는 제어 컴포넌트로 하셔도 좋습니다.
// 단 제어 컴포넌트 사용 시 useRef 를 본인이 아직 사용할 줄 모른다라고 판단할 수 있겠습니다.
function App() {
  const inputRef = useRef(null);
  const result = useSelector((state) => state.calculator.number);
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    const numberToAdd = inputRef.current.value.trim();
    if (numberToAdd) {
      dispatch(addNumber(numberToAdd));
      inputRef.current.value = "";
    }
  };

  const handleSubtract = (e) => {
    e.preventDefault();
    const numberToSubtract = inputRef.current.value.trim();
    if (numberToSubtract) {
      dispatch(subtractNumber(numberToSubtract));
      inputRef.current.value = "";
    }
  };

  return (
    <div className="App">
      <h1>☄️덧셈과 뺄셈이 가능한 앱 만들기☄️</h1>
      <div>
        <input ref={inputRef} /> 만큼을{" "}
        <button onClick={handleAdd}>더할게요</button>
        {"   "}
        <button onClick={handleSubtract}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
