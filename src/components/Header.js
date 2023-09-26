import React from 'react'
import {Badge, Container, Dropdown, FormControl, Nav, Navbar} from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'



// Container keeps everything aligned to the center
// Drop down aligned to Right
// npm i react dom help us to create different pages in react.js
const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{height:80}}>
      <Container>
        <Navbar.Brand>
         <Link to='/'>Bumppinee Mart</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl style={{width: 500}} placeholder='Search for Item'
          className='m-auto'/>
        </Navbar.Text>
        <Nav>

          <Dropdown alignRight>
            <Dropdown.Toggle variant='success'>
              {<FaShoppingCart color='white' fontSize='25px' /> } 
              <Badge>{10}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{minWidth: 370}}>
              <span style={{paddin: 10}}>Cart is Empty!</span>

            </Dropdown.Menu>

          </Dropdown>
        </Nav>

      </Container>

    </Navbar>
  )
}

export default Header;