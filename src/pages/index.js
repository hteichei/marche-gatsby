import React from 'react'

import SEO from '../components/seo'
import { Slideshow, InstaFeed } from '../components'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Slideshow />
    <InstaFeed />
  </>
)

export default IndexPage
