import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {},
  loading: false,
  err: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    start(state) {
      state.loading = true;
      state.err = null;
    },
    signInFailure(state, action) {
      state.loading = false;
      state.err = action.payload;
      state.currentUser = {};
    },
    sigInSuccess(state, action) {
      state.currentUser = action.payload;
      state.loading = false;
      state.err = null;
    },

    signOutUserSuccess(state) {
      state.loading = false;
      state.err = null;
      state.currentUser = {};
    },
    signOutUserFailure(state, action) {
      state.loading = false;
      state.err = action.payload;
    },

    deleteUserSuccess(state) {
      state.loading = false;
      state.err = null;
      state.currentUser = {};
    },
    deleteUserFailure(state, action) {
      state.loading = false;
      state.err = action.payload;
    },

    updateUserSuccess(state, action) {
      state.currentUser = action.payload;
      state.loading = false;
      state.err = null;
    },
    updateUserFailure(state, action) {
      state.loading = false;
      state.err = action.payload;
    },
  },
});

export const {
  start,
  signInFailure,
  sigInSuccess,
  signOutUserSuccess,
  signOutUserFailure,
  updateUserSuccess,
  updateUserFailure,
  deleteUserSuccess,
  deleteUserFailure,
} = userSlice.actions;
export default userSlice.reducer;
