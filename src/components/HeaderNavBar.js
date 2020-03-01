import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  background: orange;
  z-index: 100;

  a {
    color: white;
    text-decoration: none;
  }
`

const NavLeftContainer = styled.div`
  /* max-width: 200px; */
`

const NavRightContainer = styled.ul`
  /* max-width: 800px; */
  /* text-align: right; */
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-items: right;

  a {
    margin: 0 0.5rem;
    padding: 0 0.5rem;
  }
`

const HomeLink = styled.h1`
  /* margin: 0; */
`

const HeaderNavBar = () => (
  <NavContainer>
    <NavLeftContainer>
      {/* <HomeLink> */}
      <Link to="/">vanhelbergen.com</Link>
      {/* </HomeLink> */}
    </NavLeftContainer>
    <NavRightContainer>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/labs">Labs</Link>
      </li>
      <li>
        <Link to="/writings">Writings</Link>
      </li>
      <li>
        <Link to="/papers">Papers</Link>
      </li>
      <li>
        <Link to="/speaking">Speaking</Link>
      </li>
    </NavRightContainer>
  </NavContainer>
)

export default HeaderNavBar
