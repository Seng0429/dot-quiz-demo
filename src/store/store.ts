import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import loaderReducer from './loaderSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loader: loaderReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
