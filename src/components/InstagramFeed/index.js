import React from 'react'

import { useStyles } from './styles'
import { useInstaData } from './graphql'
import { Thumb } from './thumbnail'

const InstaFeed = () => {
  // Hooks
  const data = useInstaData()
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingBottom: 20,
        }}
      >
        <p
          style={{
            fontFamily: 'Oswald',
            fontWeight: 300,
            marginBottom: 0,
            letterSpacing: 1.35,
            fontSize: 18,
            textAlign: 'center',
          }}
        >
          Instagram
        </p>
        <div
          style={{
            width: 25,
            borderBottom: '1px solid black',
            margin: '5px 0 10px',
          }}
        />
      </div>
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
