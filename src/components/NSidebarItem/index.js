import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, Arrow } from './styles'
import { IoMdArrowDropright } from 'react-icons/io'

function NSidebarItem({
  route = '',
  closeSidebar = () => null,
  icon,
  label = '',
  arrow,
  arrowBottom,
  ...rest
}) {
  const [mouse, setMouse] = useState(false)

  return (
    <Container mouse={mouse} {...rest}>
      {icon}
      <Link
        to={route}
        className="option"
        onClick={() => closeSidebar()}
        onMouseEnter={() => setMouse(true)}
        onMouseLeave={() => setMouse(false)}
      >
        <p className="option">{label}</p>
      </Link>
      {arrow && (
        <Arrow close={arrowBottom}>
          <IoMdArrowDropright size={20} />
        </Arrow>
      )}
    </Container>
  )
}

export default NSidebarItem
