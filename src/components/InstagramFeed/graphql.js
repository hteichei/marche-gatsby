import { useStaticQuery, graphql } from 'gatsby'

export const useInstaData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allInstaNode(limit: 6) {
          edges {
            node {
              id
              likes
              comments
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
