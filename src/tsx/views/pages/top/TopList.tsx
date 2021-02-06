// 同ページ内のユニークな要素は同じディレクトリで作成
import { jsx } from '@emotion/react'
import { hot } from 'react-hot-loader'

const TopList = ({ user }) => {
  return (
    <div css={TopListContainer}>
      <ul>
        {user.length &&
          user.map(item => (
            <li key={item.id}>{item.firstName}</li>
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
