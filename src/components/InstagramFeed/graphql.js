import { useStaticQuery, graphql } from 'gatsby'

export const useInstaData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allInstaNode {
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
              localFile {
                childImageSharp {
                  fixed(width: 150, height: 150) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return data
}
