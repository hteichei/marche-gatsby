import React from 'react'
import { navigate } from 'gatsby'
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core'

import { navItems } from './helpers'
import { useStyles } from './styles'

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
