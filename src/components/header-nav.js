import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavContainer = styled.div`
  background: rebeccapurple;
  marginbottom: 1.45rem;
`

const NavLeftContainer = styled.div`
  margin: 0 auto;
  max-width: 60rem;
  padding: 1.5rem 1.25rem;
`

const HomeLink = styled.h1`
  margin: 0;

  a {
    color: white;
    text-decoration: none;
  }
`

const Header = () => (
  <NavContainer>
    <NavLeftContainer>
      <HomeLink>
        <Link to="/">vanhelbergen.com</Link>
      </HomeLink>
    </NavLeftContainer>
  </NavContainer>
)

export default Header
