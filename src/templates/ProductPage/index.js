import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from '@rebass/grid/emotion'

import ProductForm from '../../components/ProductForm'
import { Slideshow } from '../../components'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  console.log('images', product.images)
  return (
    <Flex flexWrap="wrap">
      <Box pr={[null, 3]} width={[1, 1 / 2]}>
        <Slideshow images={product.images} />
      </Box>
      <Box width={[1, 1 / 2]}>
        <h1>{product.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        <ProductForm product={product} />
      </Box>
    </Flex>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
