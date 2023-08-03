import { configureStore } from '@reduxjs/toolkit'
import foodReducer from './food/foodSlice'


export const store = configureStore({
  reducer: {
    food:foodReducer ,
  },
})