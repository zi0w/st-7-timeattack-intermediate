// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.
// 아래 공식문서에서 제공하는 예시 코드를 수정해서 완성하세요.

import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    number: 0,
  },
  reducers: {
    addNumber: (state, action) => {
      const numberToAdd = +action.payload;
      state.number += numberToAdd;
    },

    subtractNumber: (state, action) => {
      const numberToSubtract = +action.payload;
      state.number -= numberToSubtract;
    },
  },
});

export const { addNumber, subtractNumber } = calculatorSlice.actions;

export default calculatorSlice.reducer;
