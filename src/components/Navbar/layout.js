import React, { useState } from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/styles'
import { List, ListItem, ListItemText, withStyles } from '@material-ui/core'
import {
  FaInstagram,
  FaFacebookSquare,
  FaPinterestSquare,
} from 'react-icons/fa'

import { navItems, shopItems, subNav } from './helpers'

const useStyles = makeStyles({
  container: {
    marginLeft: 40,
    position: 'absolute',
    left: 0,
    top: 50,
  },
  title: {
    fontFamily: 'Oswald',
    fontSize: 36,
    fontWeight: 500,
    marginBottom: 30,
  },
  iconContainer: {
    display: 'flex',
    width: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})

export const Layout = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <p className={classes.title}>LE MARCHÉ</p>
      <List>
        {navItems.map((item, idx) =>
          item.label === 'Shop' ? (
            <div>
              <StyledListItem
                key={idx}
                onClick={() => setOpen(!open)}
                component={Link}
                to={`${item.link}`}
              >
                <StyledListItemText primary={item.label} />
              </StyledListItem>
              {open && (
                <List style={{ marginLeft: 20 }}>
                  {shopItems.map((item, idx) => (
                    <StyledListItem
                      key={idx}
                      component={Link}
                      to={`${item.link}`}
                    >
                      <StyledListItemText primary={item.label} />
                    </StyledListItem>
                  ))}
                </List>
              )}
            </div>
          ) : (
            <StyledListItem key={idx} component={Link} to={`${item.link}`}>
              <StyledListItemText primary={item.label} />
            </StyledListItem>
          )
        )}
      </List>
      <List style={{ marginTop: 15 }}>
        {subNav.map((item, idx) => (
          <StyledListItem key={idx} component={Link} to={`${item.link}`}>
            <StyledListItemTextAlt primary={item.label} />
          </StyledListItem>
        ))}
      </List>
      <div className={classes.iconContainer}>
        <FaInstagram />
        <FaPinterestSquare />
        <FaFacebookSquare />
      </div>
    </div>
  )
}

const StyledListItemText = withStyles({
  primary: {
    fontFamily: 'Oswald',
    textTransform: 'uppercase',
    fontSize: 20,
    '&:hover': {
      color: 'rgba(0,0,0,.4)',
    },
  },
})(ListItemText)

const StyledListItemTextAlt = withStyles({
  primary: {
    fontFamily: 'Oswald',
    fontSize: 15,
    '&:hover': {
      color: 'rgba(0,0,0,.4)',
    },
  },
})(ListItemText)

const StyledListItem = withStyles({
  root: {
    padding: '2px 2px',
  },
  selected: {
    color: 'rgba(0,0,0,.4)',
  },
})(ListItem)
