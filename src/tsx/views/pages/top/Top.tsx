import { useEffect, useState } from 'react'
import { jsx } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers, fetchAsyncUsers } from '../../../stores/slices/usersSlice'
import { hot } from 'react-hot-loader'
// parts
import TopList from './TopList'
import Header from '../../components/block/Header'
import Footer from '../../components/block/Footer'
import ScrollTop from '../../components/modules/ScrollTop'
// style
import { TopTitle } from '../../../style/pages/Top'

const Top = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)


  useEffect(() => {
    dispatch(fetchAsyncUsers())
  }, [])
  // console.log(users)
  return (
    <div>
      <Header />
      <h1 css={TopTitle}>TOP</h1>
      <TopList user={users} />
      <ScrollTop />
      <Footer />
    </div>
  )
}

export default hot(module)(Top)
