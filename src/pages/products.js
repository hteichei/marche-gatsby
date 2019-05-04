import React from 'react'

import ProductGrid from '../components/ProductGrid'
import SEO from '../components/seo'

const SecondPage = () => {
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
