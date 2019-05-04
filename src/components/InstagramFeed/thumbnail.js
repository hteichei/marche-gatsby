import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'

import { useStyles } from './styles'

export const Thumb = ({ id, original, caption }) => {
  const classes = useStyles()
  const [blur, setBlur] = useState(false)
  return (
    <a
      href={`https://www.instagram.com/p/${id}`}
      rel="noopener noreferrer"
      target="_blank"
      className={classes.link}
      onMouseEnter={() => setBlur(true)}
      onMouseLeave={() => setBlur(false)}
      style={{
        position: 'relative',
        height: '16.666vw',
        width: '16.666%',
        border: '2px solid #fff',
        textDecoration: 'none',
      }}
    >
      <div className={blur ? classes.showBlur : classes.hideBlur} />
      <img src={original} alt={caption} className={classes.img} />
    </a>
  )
}
