import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async(obj, {rejectWithValue}) => {
    // console.log(thunkAPI.getState())
    
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
      return response.data;
    } catch(err) {
      return rejectWithValue('oops, try again later')
    }
  }
)

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    type: 'guest',
    user: [],
    loading: false
  },
  reducers: {
    setType: (state, action) => {
      state.type = action.payload || 'guest'
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state)=>{
      console.log("pending");
      state.loading = true;
    })
    .addCase(fetchUsers.fulfilled, (state, action)=>{
      state.loading = false
      state.user =action.payload;
    })
    .addCase(fetchUsers.rejected, (state, action)=>{
      console.log(action.payload);
    })
  }
})

export const { setType } = usersSlice.actions;

export default usersSlice.reducer;