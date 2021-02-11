import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiURL } from '../../utils/constants'

// 非同期はSliceの外に出してcreateAsyncThunkを使用する
interface loginFormInput {
  userName: string;
  passWord: string;
}

export const fetchAsyncLogin = createAsyncThunk('login', async (data: loginFormInput) => {
  //  ログインAPIを叩く想定
  console.log(data)
  const loginParams = {
    username: data.userName,
    password: data.passWord
  }
  const res = await fetch(`${apiURL}/login`, {
    method: 'POST',
    body: JSON.stringify(loginParams)
  })
  return res.json()
  //   console.log(res.data)
})

const loginSlice = createSlice({
  //   slice名
  name: 'login',
  //   初期値
  initialState: {
    auth: {
      username: '',
      password: ''
    },
    isLogin: false
  },
  //各reducer 第一引数でstate情報を受け取り、第二引数でユーザーが操作した情報を受け取る
  reducers: {
    editUsername: (state, action) => {
      state.auth.username = action.payload
    },
    editPassword: (state, action) => {
      state.auth.password = action.payload
    },
    logout: (state, action) => {
      state.isLogin = false
    }
  },
  //   非同期の結果を受け取る
  extraReducers: builder => {
    builder.addCase(fetchAsyncLogin.fulfilled, (state, action) => {
      console.log(state)
      state.isLogin = true
    })
  }
})
// console.log(state.login)

// actionをexport
export const { editUsername, editPassword, logout } = loginSlice.actions
// state情報をexport
export const selectUser = (state: any) => state.login
// reducerをexport → storeへ
export const loginReducer = loginSlice.reducer
