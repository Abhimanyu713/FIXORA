import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser,
  signupUser,
  createAccountUser,
  updateUser,
} from "../services/api_call/Login_API";

// Async Thunks
// here the url is just the label
export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await loginUser(credentials);
  return response;
});

export const signup = createAsyncThunk("auth/signup", async (userData) => {
  const response = await signupUser(userData);
  return response;
});

export const createAccount = createAsyncThunk(
  "auth/create-account",
  async (userData) => {
    const response = await createAccountUser(userData);
    return response;
  }
);

export const update = createAsyncThunk("auth/update", async (userData) => {
  const response = await updateUser(userData);
  return response;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("authToken", action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Signup
      .addCase(signup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("authToken", action.payload.token);
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // create account
      .addCase(createAccount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("authToken", action.payload.token);
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

        // update user
        .addCase(update.pending, (state) => {
          state.status = "loading";
        })
        .addCase(update.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.user = action.payload.user;
          state.token = action.payload.token;
          localStorage.setItem("authToken", action.payload.token);
        })
        .addCase(update.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
