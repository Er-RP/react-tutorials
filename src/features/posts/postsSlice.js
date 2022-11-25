import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    { id: "1", title: "React", content: "React is a JS library" },
    { id: "2", title: "Vue", content: "Vue is a JS framework" },
  ],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      // we can mutate state directly inside createSlice
      state.posts.push(action?.payload);
    },
    //Combination of reducer and prepare method
    addPost2: {
      reducer(state, action) {
        // we can mutate state directly inside createSlice
        state.posts.push(action?.payload);
      },
      //Preparing data (Payload)
      prepare(title, content, user) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user,
          },
        };
      },
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((p) => p.id !== action?.payload);
    },
  },
});

export const getAllPosts = (state) => state.posts.posts;

export const { addPost, addPost2, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
