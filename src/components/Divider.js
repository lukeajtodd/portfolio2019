import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Divider = styled.section`
  ${tw`mt-spacer`}
  height: 40px;
  position: relative;
  left: -2rem;
  background-color: #31f0c4;
  width: 100vw;

  @media screen and (min-width: 1200px) {
    position: absolute;
    left: calc(-100vw + (100% - 1rem));
    width: 100vw;
  }
`

export default Divider
