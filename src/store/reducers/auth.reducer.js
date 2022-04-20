import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';



export const fetchUser = createAsyncThunk(
  'auth/fetch',
  async (user, {rejectWithValue}) => {
    try {
      const res = await axios.post('/auth/local', user);
      if(!res.data) {
        throw new Error()
      }
      return res.data
    } catch (error) {
      return rejectWithValue(error) 
    }
  }
)
export const getProfile = createAsyncThunk(
  'profiles/get',
  async (id, {rejectWithValue}) => {
    try {
      const res = await axios.get(`/profiles/1?populate=image,user`)
      return res.data
    } catch (error) {
      return rejectWithValue(error)
    }
  } 
)

export const editProfile = createAsyncThunk(
  "profiles/put",
  async (userInfo, {rejectWithValue, getState}) => {
    try {
      console.log(userInfo);
      const token = getState().auth.user.token;
      const res = await axios.put(`/profiles/1`, userInfo ,{
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


const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: "",
    user: null,
    profile: null
  },
  reducers: {
    logout : (state) => {
      state.user = null
    } 
  },
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loading = "loading";
    },

    [fetchUser.fulfilled]: (state, action) => {
      state.loading = 'complete';
      state.user = {
        token: action.payload.jwt,
        ...action.payload.user,
      }
    },
    [fetchUser.rejected]: (state) => {
      state.loading = "error";
    },


    [getProfile.pending]: (state) => {
      state.loading = "loading";
    },
    [getProfile.fulfilled]: (state, action) => {
      state.loading = "complete";
      state.profile = {...action.payload.data};
    },
    [getProfile.rejected]: (state) => {
      state.loading = "error";
    },

    [editProfile.pending]: (state) => {
      state.loading = "loading";
    },
    [editProfile.fulfilled]: (state,action) => {
      state.loading = "complete";
      state.profile = action.payload;
    },
    [editProfile.rejected]: (state) => {
      state.loading = "error";
    },
  },
});

export default authSlice.reducer

export const {logout} = authSlice.actions 



