import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from '@rebass/grid/emotion'

import ProductForm from '../../components/ProductForm'
import { ProductSlider } from '../../components/Slideshow/product-slider'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <Flex flexWrap="wrap">
      <Box pr={[null, 3]} width={[1, 1 / 2]}>
        <ProductSlider images={product.images} />
      </Box>
      <Box
        width={[1, 1 / 2]}
        style={{
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'Oswald',
          fontWeight: 300,
        }}
      >
        <h5 style={{ textAlign: 'center' }}>{product.title}</h5>
        <div
          style={{ textAlign: 'center', maxWidth: 300, width: '100%' }}
          dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
        />
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ProductPage
