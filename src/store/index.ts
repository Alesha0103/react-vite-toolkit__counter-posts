import { configureStore } from "@reduxjs/toolkit";
import { counter } from "./counter/counterSlice";
import { posts } from "./posts/postsSlice";

export const store = configureStore({
    reducer: {
        counter,
        posts,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
