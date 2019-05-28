import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from '@rebass/grid/emotion'

import { Img } from '../../utils/styles'
import Image from 'gatsby-image'
import ProductForm from '../../components/ProductForm'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <Flex flexWrap="wrap">
      <div style={{ width: '50vw', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: 400, width: '100%' }}>
          <Image
            fluid={product.images[0].localFile.childImageSharp.fluid}
            style={{ marginBottom: 0 }}
          />
        </div>
      </div>
      <Box
        width={[1, 1 / 2]}
        style={{
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'Oswald',
          fontWeight: 300,
          justifyContent: 'center',
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
