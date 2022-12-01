import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavbarContainer = styled.nav`
  width: 100vw;
  height: 10vh;
  background: black;
  color: white;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const BrandContainer = styled.div`
  margin: 0 30px;
`

const BrandName = styled.h1``

const NavLinksContainer = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const NavLink = styled(Link)`
  margin: 0 20px;
  font-size: 20px;
  text-decoration: none;
  color: white;
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <BrandContainer>
        <BrandName>ECOMMERCE</BrandName>
      </BrandContainer>
      <NavLinksContainer>
        <NavLink to='/add-products'>Add Products</NavLink>
        <NavLink to='/update-products'>Update Products</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
      </NavLinksContainer>
    </NavbarContainer>
  )
}

export default Navbar
