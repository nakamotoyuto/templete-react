import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slices/userSlice'
import usersReducer from './slices/usersSlice'

// それぞれのSliceを呼び出して結合する
export default configureStore({
  reducer: {
    // 識別する名前: importしてきたReducer名
    login: loginReducer,
    user: usersReducer
  }
})
