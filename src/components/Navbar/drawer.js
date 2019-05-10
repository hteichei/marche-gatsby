import React from 'react'
import { makeStyles } from '@material-ui/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  backdrop: {
    top: 60,
  },
  paperTop: {
    top: 60,
  },
})

const Drawer = props => {
  const classes = useStyles()
  const { open, toggleDrawer } = props

  const sideList = (
    <div className={classes.list}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <SwipeableDrawer
        // Overrides currently not working
        classes={{ root: classes.backdrop, paperAnchorTop: classes.paperTop }}
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
