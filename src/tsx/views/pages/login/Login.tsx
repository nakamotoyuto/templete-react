import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jsx } from '@emotion/react';
import { useForm } from "react-hook-form";

// sliceから使用するaction
import {
  fetchAsyncLogin,
  selectUser
} from '../../../stores/slices/userSlice'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import { hot } from 'react-hot-loader'

// 使用するcomponent
import Header from '../../components/block/Header'
import Footer from '../../components/block/Footer'

// 使用するstyle
import { LoginTitle } from '../../../style/pages/Login'

interface loginFormInput {
  userName: string;
  passWord: string;
}

const Login = () => {
  // 一時的な保持は各コンポーネントで行う
  const { register, handleSubmit, errors, reset } = useForm<loginFormInput>();
  const dispatch = useDispatch()
  const history = useHistory()

  //   storeに保存されている情報を変数にいれる
  const user = useSelector(selectUser)


  const onSubmit = (data: FormData) => {
    console.log(data)
    dispatch(fetchAsyncLogin(data))
    reset()
    if (user.isLogin === true) {
      history.push('/top')
    }
  }

  //   Loginを検知してページ遷移
  useEffect(() => {
    console.log(user)
    if (user.isLogin === true) {
      history.push('/top')
    }
  }, [user.isLogin])

  return (
    <div>
      <Header />
      <h1 css={LoginTitle}>Login Page</h1>
      {errors.userName && '入力に不備がございます'}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="userName"
          aria-invalid={errors.userName ? "true" : "false"}
          ref={register({ required: true })}
          placeholder="user"
        />
        {errors.userName && errors.userName.type === "required" && <span role="alert">必須だよ！</span>}
        {/* {errors.userName && errors.userName.type === "maxLength" && <span>Max length exceeded</span>} */}
        <input
          type="text"
          name="passWord"
          aria-invalid={errors.passWord ? "true" : "false"}
          ref={register({ required: true, pattern: /^[A-Za-z]+$/i })}
          placeholder="pass"
        ></input>
        {errors.passWord && errors.passWord.type === "required" && <span role="alert">必須だよ！</span>}
        {errors.passWord && errors.passWord.type === "pattern" && <span role="alert">半角英数字でお願いします！</span>}
        <input type="submit" />
      </form>
      <Footer />
    </div>
  )
}

export default hot(module)(Login)
