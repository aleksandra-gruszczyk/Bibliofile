import { css, Global } from '@emotion/react'
import React from 'react'

/*
  Center the content horizontally and vertically:
*/
const layout = css`
  html {
    min-width: 320px;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  main {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    /* Centers items along the same axis across peers on that axis */
    align-items: center;
  }
`

export default function GlobalStyles() {
  return <Global styles={[layout]} />
}
