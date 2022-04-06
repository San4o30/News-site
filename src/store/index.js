import { configureStore } from '@reduxjs/toolkit'
// import authSlice from './reducers/auth.reducer'
import newsSlice from './reducers/news.reducer'

export const store = configureStore({
  reducer: {
    news: newsSlice,
    // auth: authSlice
  }
})
