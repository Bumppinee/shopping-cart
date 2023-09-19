import React from 'react'
import {Container, Navbar} from 'react-bootstrap'



// Container keeps everything aligned to the center
const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <a>Shopping Cart</a>
        </Navbar.Brand>


      </Container>

    </Navbar>
  )
}

export default Header