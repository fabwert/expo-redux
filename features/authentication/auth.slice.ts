import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { AuthState, User } from "./auth.interface";

const initialState: AuthState = {
  user: null,
  status: "idle",
  error: null,
};

export const signin = createAsyncThunk("auth/signin", async () => {
  //const response = await axios.get("/login/");
  //return response.data;
  console.log("signin");
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      // TODO: replace with actual user object
      state.user = {} as User;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    // TODO: add async thunk
    builder
      .addCase(signin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.status = "succeeded";
        //state.user = action.payload;
        //AsyncStorage.setItem("@fabwert_token", action.payload.token);
      })
      .addCase(signin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getAuthUser = (state: RootState) => state.auth.user;
export const getAuthStatus = (state: RootState) => state.auth.status;
export const getAuthError = (state: RootState) => state.auth.error;

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
