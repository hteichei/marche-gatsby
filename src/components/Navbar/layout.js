import React, { useState, useContext, Fragment } from 'react'
import { Link } from 'gatsby'
import { MdMenu } from 'react-icons/md'
import { IconButton } from '@material-ui/core'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'

import Cart from '../Cart'
import { CartMenuItem } from './cart-menu-item'
import Drawer from '../Drawer/drawer'
import StoreContext from '../../context/StoreContext'
import { useStyles } from './layout-styles'

export const MarcheNavbar = () => {
  // Hooks
  const [openDialog, setOpenDialog] = useState(false)
  const [drawerState, setDrawerState] = useState({
    top: false,
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
          <Link className={classes.link} to="/">
            <div>
              <img
                src={require(`../../images/marche-logo.svg`)}
                alt="logo"
                className={classes.logo}
              />
            </div>
          </Link>
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
          <Link className={classes.link} to="/">
            <div>
              <img
                src={require(`../../images/marche-logo.svg`)}
                alt="logo"
                className={classes.logo}
              />
            </div>
          </Link>
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
