import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const URL_SERV = "http://localhost:3001";

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ page=1,order="asc",limit=10 },{ getState }) => {
    try {
      const response = await axios.get(`${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);
      console.log(response.data);
    } catch(e) {
      throw e;
    }
  }
);