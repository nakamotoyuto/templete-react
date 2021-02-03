import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiURL } from '../../utils/constants'

// 非同期はSliceの外に出してcreateAsyncThunkを使用する
export const fetchAsyncUser = createAsyncThunk('user', async () => {
  //  ログインAPIを叩く想定
  const userAll = await axios.get(`${apiURL}/users`)
  return userAll
  //   console.log(res.data)
})

const userSlice = createSlice({
  //   slice名
  name: 'user',
  //   初期値
  initialState: {
    users: []
  },
  //各reducer 第一引数でstate情報を受け取り、第二引数でユーザーが操作した情報を受け取る
  reducers: {
  },
  //   非同期の結果を受け取る
  extraReducers: builder => {
    builder.addCase(fetchAsyncUser.fulfilled, (state, action) => {
      // console.log(action)
      state.users.push(action.payload.data)
    })
  }
})

// actionをexport
// export const { editUsername, editPassword, logout } = loginSlice.actions
// state情報をexport
// export const selectUser = (state: any) => state.login
// reducerをexport → storeへ
export default userSlice.reducer
