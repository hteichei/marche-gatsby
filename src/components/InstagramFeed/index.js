import React from 'react'

import { Img } from '../../utils/styles'
import { useInstaData } from './graphql'
import { useStyles } from './styles'

const InstaFeed = () => {
  // Hooks
  const data = useInstaData()
  const classes = useStyles()
  return (
    <div className={classes.flexContainer}>
      {data.allInstaNode.edges.map((x, idx) => {
        return (
          <div className={classes.container} key={idx}>
            <a
              href={`https://www.instagram.com/p/${x.node.id}`}
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link}
            >
              <Img
                className={classes.image}
                fixed={x.node.localFile.childImageSharp.fixed}
                alt={x.node.caption}
              />
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default InstaFeed
