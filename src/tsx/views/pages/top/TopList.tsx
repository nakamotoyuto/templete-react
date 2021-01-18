// 同ページ内のユニークな要素は同じディレクトリで作成
import { jsx } from '@emotion/react'
import { hot } from 'react-hot-loader'

const TopList = () => {
  return (
    <div css={TopListContainer}>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </div>
  )
}

export default hot(module)(TopList)

const TopListContainer = {
  height: '100vh'
}
