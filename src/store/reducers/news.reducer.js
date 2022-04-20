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

export const putNews = createAsyncThunk(
  "news/put",
  async ({news, id}, {rejectWithValue, getState}) => {
    try {
      const token = getState().auth.user.token;
      const res = await axios.put(`/news/${id}`, {data: {...news}} ,{
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
  "/news?populate=image,author"
);

export const getNewsInfo = createAsyncThunk(
  'news-item/get',
  async (id, {rejectWithValue}) => {
    try {
      const res = await axios.get(`/news/${id}?populate[author][populate]=image&populate=image`)
      return res.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const deleteNews = createAsyncThunk(
  'news/delete',
  async(id,{rejectWithValue, getState}) => {
    try {
      const token = getState().auth.user.token;
      const res = await axios.delete(`/news/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if(!res.data) {
        throw new Error()
      }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)


const newsSlice = createSlice({
  name: "news",
  initialState: {
    data: [],
    loading: "",
    dataItem: null,
  },
  extraReducers: {
    [postNews.pending]: (state) => {
      state.loading = "loading";
    },
    [postNews.fulfilled]: (state,action) => {
      state.loading = "complete";
      state.data.push(action.payload.data)
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

    [getNewsInfo.pending]: (state) => {
      state.loading = "loading";
    },
    [getNewsInfo.fulfilled]: (state, action) => {
      state.loading = "complete";
      state.dataItem = action.payload.data;
    },
    [getNewsInfo.rejected]: (state) => {
      state.loading = "error";
    },

    [putNews.pending]: (state) => {
      state.loading = "loading";
    },
    [putNews.fulfilled]: (state,action) => {
      state.loading = "complete";
      state.dataItem = action.payload;
    },
    [putNews.rejected]: (state) => {
      state.loading = "error";
    },
  },
});

export default newsSlice.reducer;



