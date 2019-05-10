import React, { useState, useContext, Fragment } from 'react'
import { Link } from 'gatsby'
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
    alignItems: 'center',
    '@media (max-width: 780px)': {
      padding: '0 20px',
    },
  },
  logo: {
    width: 150,
    height: 60,
    '@media (max-width: 400px)': {
      width: 120,
    },
  },
  navList: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    listStyleType: 'none',
    justifyContent: 'space-around',
  },
  link: {
    color: 'black',
    margin: '5px 0',
    textDecoration: 'none',
    letterSpacing: 1.5,
    '&:hover': {
      color: 'rgba(0,0,0,.5)',
      textDecoration: 'none',
    },
  },
})

export const MarcheNavbar = () => {
  // Hooks
  const [openDialog, setOpenDialog] = useState(false)
  const [drawerState, setDrawerState] = useState({
    top: false,
    // left: false,
    // bottom: false,
    // right: false,
  })
  const context = useContext(StoreContext)
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width: 780px)')

  // Handlers
  const toggleDrawerState = (side, open) => () => {
    setDrawerState({ ...drawerState, [side]: open })
  }
  const handleCloseDialog = () => setOpenDialog(false)
  const handleOpenDialog = () => setOpenDialog(true)

  const { lineItems } = context.checkout
  if (isMobile) {
    return (
      <Fragment>
        <div className={classes.container}>
          <CartMenuItem
            lineItems={lineItems}
            handleOpenDialog={handleOpenDialog}
          />
          <div href="/">
            <img
              src={require(`../../images/marche-logo.svg`)}
              alt="logo"
              className={classes.logo}
            />
          </div>
          <IconButton
            onClick={toggleDrawerState('top', !drawerState.top)}
            style={{ outline: 'none' }}
          >
            <MdMenu size={25} />
          </IconButton>
        </div>
        <Cart openDialog={openDialog} handleClose={handleCloseDialog} />
        <Drawer open={drawerState.top} toggleDrawer={toggleDrawerState} />
      </Fragment>
    )
  } else
    return (
      <Fragment>
        <div className={classes.container}>
          <div href="/">
            <img
              src={require(`../../images/marche-logo.svg`)}
              alt="logo"
              className={classes.logo}
            />
          </div>
          <div style={{ width: 400 }}>
            <ul className={classes.navList}>
              <Link to="/products" className={classes.link}>
                <li>Shop</li>
              </Link>
              <li>
                <Link className={classes.link} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className={classes.link} to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <CartMenuItem
                  lineItems={lineItems}
                  handleOpenDialog={handleOpenDialog}
                />
              </li>
            </ul>
          </div>
        </div>
        <Cart openDialog={openDialog} handleClose={handleCloseDialog} />
        <Drawer open={drawerState.top} toggleDrawer={toggleDrawerState} />
      </Fragment>
    )
}

const CartCounter = styled.span({
  backgroundColor: `white`,
  color: `black`,
  borderRadius: `50%`,
  padding: `0 7.5px`,
  fontSize: `1rem`,
  float: `right`,
  margin: `0px -10px`,
  zIndex: 999,
})

const CartMenuItem = ({ lineItems, handleOpenDialog }) => (
  <div>
    {lineItems.length !== 0 && <CartCounter>{lineItems.length}</CartCounter>}
    <IconButton style={{ outline: 'none' }} onClick={() => handleOpenDialog()}>
      <FaShoppingCart size={25} />
    </IconButton>
  </div>
)
