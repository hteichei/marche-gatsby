import { graphql } from 'gatsby'

export const useProductData = () => {
  const query = graphql`
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
  return query.data
}
