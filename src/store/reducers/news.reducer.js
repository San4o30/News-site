import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { asyncThunk } from '../../helpers/asyncThunk';

import axios from '../../api/axios';


export const postNews = createAsyncThunk(
  "news/post",
  async (data, {rejectWithValue, getState}) => {
    try {
      const token = getState().auth.user.token;
      const res = await axios.post("/news", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if(!res.data) {
        throw new Error()
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)


export const getNews = asyncThunk(
  "news/get",
  "get",
  "/news?populate=image"
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    data: [],
    loading: "",
  },
  extraReducers: {
    [postNews.pending]: (state) => {
      state.loading = "loading";
    },
    [postNews.fulfilled]: (state) => {
      state.loading = "complete";
    },
    [postNews.rejected]: (state) => {
      state.loading = "error";
    },
    [getNews.pending]: (state) => {
      state.loading = "loading";
    },
    [getNews.fulfilled]: (state, action) => {
      state.loading = "complete";
      state.data = action.payload.data;
    },
    [getNews.rejected]: (state) => {
      state.loading = "error";
    },
  },
});

export default newsSlice.reducer;