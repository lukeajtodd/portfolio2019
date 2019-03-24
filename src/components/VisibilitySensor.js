import React, { useState } from 'react'
import PropTypes from 'prop-types'
import VSensor from 'react-visibility-sensor'

function VisibilitySensor({ once, children, ...rest }) {
  const [active, setActive] = useState(true)

  return (
    <VSensor
      {...rest}
      active={active}
      onChange={isVisible => once && isVisible && setActive(false)}
    >
      {({ isVisible }) => children({ isVisible })}
    </VSensor>
  )
}

VisibilitySensor.propTypes = {
  once: PropTypes.bool,
  children: PropTypes.func.isRequired,
}

VisibilitySensor.defaultProps = {
  once: false,
}

export default VisibilitySensor
