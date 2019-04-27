import React from 'react'
import { Link } from 'gatsby'
import { Slideshow } from '../components/Slideshow'

import SEO from '../components/seo'

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <Slideshow />
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
