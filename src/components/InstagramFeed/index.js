import React from 'react'
import { makeStyles } from '@material-ui/styles'

import { useStyles } from './styles'
import { useInstaData } from './graphql'
import { Thumb } from './thumbnail'

const InstaFeed = () => {
  // Hooks
  const data = useInstaData()
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <p style={{ marginBottom: 0 }}>Instagram</p>
      <div
        style={{
          width: 25,
          borderBottom: '1px solid black',
          margin: '5px 0 20px',
        }}
      />
      <div className={classes.flexContainer}>
        {data.allInstaNode.edges.map(x => {
          return (
            <Thumb
              key={x.node.id}
              id={x.node.id}
              original={x.node.original}
              caption={x.node.caption}
            />
          )
        })}
      </div>
    </div>
  )
}

export default InstaFeed
