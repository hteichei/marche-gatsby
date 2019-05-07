import React, { useState, useContext, Fragment } from 'react'
import {
  Navbar,
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
import { MdMenu } from 'react-icons/md'
import { makeStyles } from '@material-ui/styles'
import { IconButton } from '@material-ui/core'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'
import styled from '@emotion/styled'

import Cart from '../Cart'
import Drawer from './drawer'
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

export const MarcheNavbar = () => {
  // Hooks
  const [isOpen, setOpen] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const context = useContext(StoreContext)
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width: 780px)')

  // Handlers
  const toggleDrawer = () => setOpen(!isOpen)
  const handleOpenDialog = () => setOpenDialog(true)
  const handleCloseDialog = () => setOpenDialog(false)
  const handleCloseDrawer = () => setOpen(false)

  const { lineItems } = context.checkout
  return (
    <Fragment>
      <Navbar color="light" light expand="md" className={classes.container}>
        <NavbarBrand href="/">
          <img
            src={require(`../../images/marche-logo.svg`)}
            alt="logo"
            className={classes.logo}
          />
        </NavbarBrand>
        {isMobile ? (
          <IconButton
            onClick={() => toggleDrawer()}
            style={{ outline: 'none' }}
          >
            <MdMenu size={25} />
          </IconButton>
        ) : (
          <Nav className="ml-auto" navbar style={{ alignItems: 'center' }}>
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
              {lineItems.length !== 0 && (
                <CartCounter>{lineItems.length}</CartCounter>
              )}
              <IconButton onClick={() => handleOpenDialog()}>
                <FaShoppingCart size={25} />
              </IconButton>
            </NavItem>
          </Nav>
        )}
      </Navbar>
      <Cart openDialog={openDialog} handleClose={handleCloseDialog} />
      <Drawer open={isOpen} handleClose={handleCloseDrawer} />
    </Fragment>
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
