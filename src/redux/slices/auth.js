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
export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params) => {
    const data = await axios.post("./auth/register", params);
    return data?.data;
  }
);
export const getAuthMe = createAsyncThunk("auth/getAuthMe", async () => {
  const data = await axios.get("./auth/me");
  return data?.data;
});
const initialState = {
  data: null,
  status: "loading",
  isLogedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      state.isLogedIn = false;
    },
  },
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
      })
      .addCase(getAuthMe.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(getAuthMe.fulfilled, (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
        state.isLogedIn = true;
      })
      .addCase(getAuthMe.rejected, (state) => {
        state.status = "error";
        state.data = null;
      })
      .addCase(fetchRegister.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
        state.isLogedIn = true;
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.status = "error";
        state.data = null;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
