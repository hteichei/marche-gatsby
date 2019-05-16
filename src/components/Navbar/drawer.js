import React from 'react'
import { navigate } from 'gatsby'
import { makeStyles } from '@material-ui/styles'
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core'

import { navItems } from './helpers'

const useStyles = makeStyles({
  list: {
    width: '100vw',
  },
  listRoot: {
    padding: '0 !important',
  },
  fullList: {
    width: 'auto',
  },
  backdrop: {
    top: '60px !important',
  },
  paperTop: {
    top: '60px !important',
  },
  link: {
    color: 'black',
    margin: 0,
    textDecoration: 'none',
    letterSpacing: 1.5,
    '&:hover': {
      color: 'rgba(0,0,0,.5)',
      textDecoration: 'none',
    },
  },
  elevation16: {
    // Not working yet
    boxShadow: 'none !important',
  },
})

const Drawer = props => {
  const classes = useStyles()
  const { open, toggleDrawer } = props

  const handleNavigate = url => {
    // Want to close drawer automatically after navigating to new page
    navigate(url)
  }

  const sideList = (
    <div className={classes.list}>
      <List classes={{ root: classes.listRoot }}>
        {navItems.map(item => (
          <div key={item}>
            <ListItem button onClick={() => handleNavigate(item.link)}>
              <ListItemText primary={item.label} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <SwipeableDrawer
        classes={{ paperAnchorTop: classes.paperTop }}
        ModalProps={{
          BackdropProps: { classes: { root: classes.backdrop } },
        }}
        anchor="top"
        open={open}
        onClose={toggleDrawer('top', false)}
        onOpen={toggleDrawer('top', true)}
      >
        <div tabIndex={0} role="button">
          {sideList}
        </div>
      </SwipeableDrawer>
    </div>
  )
}

export default Drawer
