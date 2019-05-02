import React, { useState } from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/styles'

const Menu = ({ open }) => {
  if (!open) return null
  return (
    <ul
      style={{
        listStyleType: 'none',
        width: 60,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <li>Dresses</li>
      <li>Tops</li>
      <li>Pants</li>
    </ul>
  )
}

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

export const Nav = () => {
  const [menu, setMenu] = useState(false)
  const classes = useStyles()

  // Handlers
  const toggleMenuOpen = () => setMenu(true)
  const toggleMenuClose = () => setMenu(false)

  return (
    <div className={classes.container}>
      <img
        src={require(`../../images/marche-logo.svg`)}
        alt="logo"
        className={classes.logo}
      />
      <div style={{ width: 400 }}>
        <ul className={classes.navRight}>
          <li>Home</li>
          <li
            onMouseOver={() => toggleMenuOpen()}
            onMouseLeave={() => toggleMenuClose()}
          >
            Shop
          </li>
          <li>Collections</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
      <Menu open={menu} style={{ position: 'absolute', bottom: 200 }} />
    </div>
  )
}
