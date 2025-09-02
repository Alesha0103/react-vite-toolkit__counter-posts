import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./posts-api";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface PostsState {
    posts: Post[] | null;
    loading: boolean;
    error: string | null;
    isHidden: boolean;
}

const initialState: PostsState = {
    posts: null,
    loading: false,
    error: null,
    isHidden: false,
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        hidePosts: (state, action) => {
            state.isHidden = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Ошибка";
            });
    },
});

export const { hidePosts } = postsSlice.actions;

export const posts = postsSlice.reducer;
