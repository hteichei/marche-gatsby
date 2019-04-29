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
    dipslay: 'flex',
    backgroundColor: 'light-brown',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 60,
  },
  navRight: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    listStyleType: 'none',
  },
})

export const Example = () => {
  const [isOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!isOpen)
  const classes = useStyles()
  return (
    <div>
      <Navbar color="light" light expand="md">
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
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
