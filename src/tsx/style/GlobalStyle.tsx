import * as React from 'react'
import { Global, css, jsx } from '@emotion/react'
import { textClr } from '../style/variables'
import { reset } from './resetStyle'

// grobal-css
const globalStyle = css`
  ${reset}
  body {
    color: ${textClr};
  }
  button {
    outline: none;
  }
`

const GlobalStyle: React.FC = ({ children }) => {
  return (
    <div>
      <Global styles={globalStyle} />
      {children}
    </div>
  )
}

export default GlobalStyle
