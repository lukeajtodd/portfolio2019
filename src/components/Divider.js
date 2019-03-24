import styled from 'styled-components'
import tw from 'tailwind.macro'

const Divider = styled.section`
  ${tw`mt-spacer shadow-default`}
  height: 40px;
  position: relative;
  left: -2rem;
  background-color: #31f0c4;
  width: 100vw;
  transform: ${props => props.transform};
  will-change: transform;

  @media screen and (min-width: 1200px) {
    position: absolute;
    ${props =>
      props.side === 'left'
        ? { left: 'calc(-100vw + (100% - 1rem))' }
        : { right: 'calc(-100vw + (100% - 1rem))', left: '0' }}
    width: 100vw;
  }
`

export default Divider
