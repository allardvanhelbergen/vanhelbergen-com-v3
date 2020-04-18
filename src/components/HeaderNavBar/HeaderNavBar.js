import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'
import tokens from '../../theme/tokens'
import Monogram from '../../images/avh-monogram-transparent.inline.svg'

const Logo = styled(Monogram)`
  display: block;
  width: 2.5rem;
  height: 2.5rem;
`

const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem;
  background: ${tokens.color.white};
  z-index: 100;
  box-shadow: 0 1px 0 rgba(0 0 5px 0.2);

  a {
    text-decoration: none;
    color: ${tokens.color.text.default};

    &:hover {
      color: ${tokens.color.primary};
    }
  }

  ${Logo} {
    fill: ${tokens.color.text.default};

    &:hover {
      fill: ${tokens.color.primary};
    }
  }

  &.clear {
    background-color: transparent;
    box-shadow: 0 1px 0 ${tokens.color.white};

    a {
      color: ${tokens.color.white};

      &:hover {
        color: ${tokens.color.primary};
      }
    }

    ${Logo} {
      fill: ${tokens.color.white};

      &:hover {
        fill: ${tokens.color.primary};
      }
    }
  }
`

const NavLeftContainer = styled.div`
  /* max-width: 200px; */
`

const NavRightContainer = styled.ul`
  /* max-width: 800px; */
  /* text-align: right; */
  ${tw`list-none m-0 p-0`}
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-items: right;

  a {
    margin: 0 0.5rem;
    padding: 0 0.5rem;
  }
`

const HeaderNavBar = ({ appearance = 'clear' }) => (
  <NavContainer className={appearance}>
    <NavLeftContainer>
      <Link to="/">
        <Logo />
      </Link>
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
        <Link to="/speaking">Speaking</Link>
      </li>
    </NavRightContainer>
  </NavContainer>
)

export default HeaderNavBar
