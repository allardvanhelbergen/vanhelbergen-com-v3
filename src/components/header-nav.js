import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavContainer = styled.div`
  background: rebeccapurple;
  marginbottom: 1.45rem;
`

const NavLeftContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
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
