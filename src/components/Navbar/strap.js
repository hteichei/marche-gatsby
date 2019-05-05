import React, { useState, useContext } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { makeStyles } from '@material-ui/styles'
import styled from '@emotion/styled'

import StoreContext from '../../context/StoreContext'

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: 65,
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '0 50px',
    zIndex: 999,
    fontFamily: 'Oswald',
    color: 'black',
    letterSpacing: 1.3,
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    width: 150,
    height: 60,
    '@media (max-width: 400px)': {
      width: 120,
    },
  },
})

export const Example = () => {
  // Hooks
  const [isOpen, setOpen] = useState(false)
  const context = useContext(StoreContext)
  const classes = useStyles()

  // Handlers
  const toggle = () => setOpen(!isOpen)
  const { lineItems } = context.checkout
  return (
    <div>
      <Navbar color="light" light expand="md" className={classes.container}>
        <NavbarBrand href="/">
          <img
            src={require(`../../images/marche-logo.svg`)}
            alt="logo"
            className={classes.logo}
          />
        </NavbarBrand>
        <NavbarToggler onClick={() => toggle()} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Shop
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/products">All</NavLink>
                </DropdownItem>
                <DropdownItem>Dresses</DropdownItem>
                <DropdownItem>Shirts</DropdownItem>
                <DropdownItem>Jumpers</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cart">
                {lineItems.length !== 0 && (
                  <CartCounter>{lineItems.length}</CartCounter>
                )}
                <FaShoppingCart size={25} />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

const CartCounter = styled.span({
  backgroundColor: `white`,
  color: `#663399`,
  borderRadius: `50%`,
  padding: `0 5px`,
  fontSize: `1rem`,
  float: `right`,
  margin: `-10px -15px`,
  zIndex: 999,
})
