import React, { useState } from 'react'
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
import { makeStyles } from '@material-ui/styles'

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
    '@media (max-width: 768px)': {
      backgroundColor: 'transparent !important',
    },
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
  const [isOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!isOpen)
  const classes = useStyles()
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
        <Collapse
          isOpen={isOpen}
          navbar
          // style={{ backgroundColor: '#fff', width: '100%' }}
        >
          <Nav
            className="ml-auto"
            navbar
            // style={{
            //   width: isOpen ? 220 : '100%',
            //   display: 'flex',
            //   justifyContent: 'space-between',
            //   padding: 0,
            // }}
          >
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Shop
              </DropdownToggle>
              <DropdownMenu right>
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
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
