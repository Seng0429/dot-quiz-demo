import { createSlice } from '@reduxjs/toolkit'

interface userInfoITF {
  email: string
  emailVerified: string
  uid: string
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: null as userInfoITF | null
  },
  reducers: {
    saveUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
  },
})

export const { saveUserInfo } = authSlice.actions
export default authSlice.reducer