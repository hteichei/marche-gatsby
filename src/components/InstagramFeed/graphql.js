import { useStaticQuery, graphql } from 'gatsby'

export const useInstaData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allInstaNode(limit: 8) {
          edges {
            node {
              id
              mediaType
              preview
              original
              timestamp
              caption
            }
          }
        }
      }
    `
  )
  return data
}
