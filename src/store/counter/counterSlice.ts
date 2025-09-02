import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            if (state.count === 0) return state;
            state.count -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const counter = counterSlice.reducer;
