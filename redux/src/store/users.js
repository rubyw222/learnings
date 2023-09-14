import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    type: 'guest',
    user: []
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload || 'guest'
    }
  }
})

export const { setType } = usersSlice.actions;

export default usersSlice.reducer;