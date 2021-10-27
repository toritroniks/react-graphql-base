import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      console.log(state);
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
