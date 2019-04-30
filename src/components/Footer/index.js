import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/styles'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

import { Subscribe } from '../MailingList'

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    fontFamily: 'Oswald, sans-serif',
    padding: '30px 60px',
  },
  ul: {
    width: 200,
    padding: 0,
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 300,
    margin: 0,
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
  copyright: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Oswald, sans-serif',
    fontWeight: 300,
    padding: 15,
  },
})

const footerLinks = ['Contact', 'Store Policy', 'Privacy  Policy']

export const Footer = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.container}>
        <div>
          <ul className={classes.ul}>
            {footerLinks.map((link, idx) => {
              return (
                <Link key={idx} className={classes.link}>
                  {link}
                </Link>
              )
            })}
          </ul>
          <li style={{ display: 'flex' }}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://en-gb.facebook.com/pg/shoplemarche/posts/"
              className={classes.link}
            >
              <FaFacebook style={{ marginRight: 10 }} />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/shoplemarche/"
              className={classes.link}
            >
              <FaInstagram />
            </a>
          </li>
        </div>
        <Subscribe />
      </div>
      <div className={classes.copyright}>© shoplemarche</div>
    </>
  )
}
