// 同ページ内のユニークな要素は同じディレクトリで作成
import { jsx } from '@emotion/react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Detail from '../views/pages/detail/Detail'

const TopList = ({ user }) => {
  return (
    <div css={TopListContainer}>
      <ul>
        {user.length &&
          user.map(item => (
            <li key={item.id} id={item.id}>
              <Route path="/detail/:id" component={Detail}>{item.firstName}</Route>
            </li>
          ))
        }
      </ul>
    </div >
  )
}

export default hot(module)(TopList)

const TopListContainer = {
  height: '100vh'
}
