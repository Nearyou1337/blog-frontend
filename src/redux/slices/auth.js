import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (params) => {
    const data = await axios.post("./auth/login", params);
    console.log(data);
    return data?.data;
  }
);
const initialState = {
  data: null,
  status: "loading",
  isLogedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (fetchUser) => {
    fetchUser
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })

      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
        state.isLogedIn = true;
      })

      .addCase(fetchUserData.rejected, (state) => {
        state.status = "error";
        state.data = null;
      });
  },
});

export const authReducer = authSlice.reducer;
