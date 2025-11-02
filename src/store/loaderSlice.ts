import { createSlice } from '@reduxjs/toolkit'

export const loaderSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false
  },
  reducers: {
    showLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export const { showLoading } = loaderSlice.actions
export default loaderSlice.reducer