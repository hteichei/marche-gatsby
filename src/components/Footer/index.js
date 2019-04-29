import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/styles'

import { Subscribe } from '../MailingList'

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Oswald, sans-serif',
  },
  ul: {
    width: 200,
    margin: '30px 50px',
    padding: '0 20px',
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 300,
  },
  link: {
    color: 'black',
    margin: '5px 0',
    textDecoration: 'none',
    letterSpacing: 1.5,
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

const footerLinks = [
  'Contact',
  'Store Policy',
  'Privacy  Policy',
  'Facebook',
  'Instagram',
]

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
        </div>
        <Subscribe />
      </div>
      <div className={classes.copyright}>© shoplemarche</div>
    </>
  )
}
