import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import loginReducer from './slices/userAllSlice'

// それぞれのSliceを呼び出して結合する
export default configureStore({
  reducer: {
    // 識別する名前: importしてきたReducer名
    user: userReducer,
    login: loginReducer
  }
})
