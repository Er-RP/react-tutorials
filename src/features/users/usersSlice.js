import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "RP" },
  { id: "1", name: "Raj" },
  { id: "2", name: "Robin" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const getAllUsers = (state) => state.users;

export default usersSlice.reducer;
