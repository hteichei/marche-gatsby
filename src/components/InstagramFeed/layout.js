import React, { useState, useEffect } from 'react'

import { useStyles } from './styles'
import { useInstaData } from './graphql'
import { Thumb } from './thumbnail'

export const Layout = ({ data }) => {
  // Hooks
  const [instaImages, setInstaImages] = useState([])
  const classes = useStyles()
  useEffect(() => {
    console.log('data', data)
    setInstaImages(
      data.allInstaNode.edges.filter(
        img => img.node.id !== 'BsKgYBNFzxM' && img.node.id !== 'BxNhiHYHOG3'
      )
    )
  }, [])
  console.log('instaImages', instaImages)

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
        {instaImages.map(x => {
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
