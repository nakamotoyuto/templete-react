import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiURL } from '../../utils/constants'

// 非同期はSliceの外に出してcreateAsyncThunkを使用する
export const fetchAsyncUsers = createAsyncThunk('user/get', async () => {
  //  ログインAPIを叩く想定
  const res = await fetch(`${apiURL}/users`)
  return res.json()
})

const usersSlice = createSlice({
  //   slice名
  name: 'user',
  //   初期値
  initialState: {
    users: {}
  },
  //各reducer 第一引数でstate情報を受け取り、第二引数でユーザーが操作した情報を受け取る
  reducers: {
  },
  //   非同期の結果を受け取る
  extraReducers: builder => {
    builder.addCase(fetchAsyncUsers.fulfilled, (state, action) => {
      state.users = action.payload
      console.log(state.users)
    })
  }
})
// console.log(state.users)
// actionをexport
// export const {} = usersSlice.actions
// state情報をexport
export const selectUsers = (state: any) => state.user.users
// reducerをexport → storeへ
export const usersReducer =  usersSlice.reducer
