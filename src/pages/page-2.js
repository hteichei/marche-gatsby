import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/styles'

import { Slideshow } from '../components/Slideshow'
import { NavbarContainer } from '../components'

import SEO from '../components/seo'

const useStyles = makeStyles({
  container: {},
})

const SecondPage = () => {
  const classes = useStyles()
  return (
    <>
      <SEO title="Page two" />
      {/* <NavbarContainer /> */}
      <Slideshow />
      {/* <Link to="/">Go back to the homepage</Link> */}
    </>
  )
}

export default SecondPage
