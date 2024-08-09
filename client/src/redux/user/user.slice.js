import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
  err: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    sigInStart(state) {
      state.loading = true;
      state.err = null;
    },
    sigInSuccess(state, action) {
      currentUser = action.payload;
      state.loading = false;
      state.err = null;
    },
    sigInFailure(state, action) {
      state.loading = false;
      state.err = action.payload;
    },
  },
});

export const {sigInStart, sigInSuccess, sigInFailure} = userSlice.actions 
export default userSlice.reducer