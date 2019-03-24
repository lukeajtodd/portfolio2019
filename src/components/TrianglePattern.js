import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { triangle } from './trianglepattern.module.css'

import Triangle from '../svgs/triangle.svg'

const PatternWrapper = styled.div`
  ${tw`absolute`}
  display: none;
  width: 726px;
  left: ${props => props.left};
  top: ${props => props.top};

  @media screen and (min-width: 1200px) {
    display: block;
  }
`

const Pattern = styled.div`
  ${tw`relative flex flex-wrap items-start`}
`

const TrianglePattern = ({ left, top }) => (
  <PatternWrapper left={left} top={top}>
    <Pattern>
      <Triangle className={triangle} />
      <Triangle className={triangle} style={{ left: '22%', top: '-44px' }} />
      <Triangle className={triangle} style={{ left: '16%', top: '116px' }} />
      <Triangle className={triangle} style={{ left: '-6%', top: '159px' }} />
      <Triangle className={triangle} style={{ left: '-16%', top: '-116px' }} />
      <Triangle className={triangle} style={{ left: '6%', top: '-159px' }} />
      <Triangle className={triangle} style={{ left: '-10%', top: '-276px' }} />
    </Pattern>
  </PatternWrapper>
)

TrianglePattern.propTypes = {
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default TrianglePattern
