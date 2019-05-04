import React from 'react'
import { makeStyles } from '@material-ui/styles'

import ProductGrid from '../components/ProductGrid'
import SEO from '../components/seo'

const useStyles = makeStyles({
  container: {},
})

const SecondPage = () => {
  const classes = useStyles()
  return (
    <>
      <SEO title="Page two" />
      <div style={{ margin: '0 60px' }}>
        <ProductGrid />
      </div>
    </>
  )
}

export default SecondPage
