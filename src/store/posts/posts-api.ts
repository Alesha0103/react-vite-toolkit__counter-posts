import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Post } from "./postsSlice";

export const fetchPosts = createAsyncThunk<Post[]>(
    "posts/fetchPosts",
    async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
            throw new Error("FETCH_ERROR");
        }
        const data: Post[] = await response.json();
        return data;
    }
);
