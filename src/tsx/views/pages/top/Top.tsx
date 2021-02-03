import { useEffect, useState } from 'react'
import { jsx } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, logout } from '../../../stores/slices/userSlice'
import { fetchAsyncUser } from '../../../stores/slices/userAllSlice'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import { hot } from 'react-hot-loader'
// parts
import TopList from './TopList'
import Header from '../../components/block/Header'
import Footer from '../../components/block/Footer'
import ScrollTop from '../../components/modules/ScrollTop'
import { Button } from '../../components/atoms/Button'
// style
import { TopTitle } from '../../../style/pages/Top'

const Top = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(selectUser)
  const initialData = {
    users: [{
      id: 0,
      firstName: '',
      lastName: '',
      company_name: "",
      comment: "",
      country: "",
      image: "",
      create_at: ""
    }]
  }
  const userFlag = true
  const [data, setData] = useState(initialData);
  const [flag, setFlag] = useState(userFlag);
  const handleLogout = () => {
    dispatch(logout(''))
    history.push('/')
  }


  useEffect(() => {
    console.log('ddd')
    dispatch(fetchAsyncUser())
    // fetch(`http://localhost:5000/users`, {
    //   mode: 'cors',
    //   method: 'GET',
    //   credentials: 'include'
    // })
    //   .catch(error => {
    //     //ネットワークエラーなど
    //     console.log('error発生しました。')
    //   })
    //   .then(res => {
    //     if (res.status !== 200) {
    //       // 404エラーなど
    //       throw new FetchError(String(res.status))
    //     }
    //     return res.json();
    //   })
    //   .then(data => {
    //     if (!data.length) return
    //     setData(data)
    //   })
  }, [])

  return (
    <div>
      <Header />
      <h1 css={TopTitle}>TOP</h1>
      {user ? (
        <div>
          <p>welcome</p>

          {/* <p>{user.auth.username}</p> */}
        </div>
      ) : null}

      <Button
        onClick={handleLogout}
        name="LogIn"
        color="#ffffff"
        bgColor="pink"
      />

      <TopList />
      <ScrollTop />
      <Footer />
    </div>
  )
}

export default hot(module)(Top)
