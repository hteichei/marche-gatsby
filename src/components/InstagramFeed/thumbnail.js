import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { FaInstagram } from 'react-icons/fa'

import './animation.css'
import { useStyles } from './styles'

export const Thumb = ({ id, original, caption }) => {
  // Hooks
  const [blur, setBlur] = useState(false)
  const classes = useStyles()
  return (
    <a
      href={`https://www.instagram.com/p/${id}`}
      rel="noopener noreferrer"
      target="_blank"
      className={classes.link}
      onMouseEnter={() => setBlur(true)}
      onMouseLeave={() => setBlur(false)}
    >
      <div className={blur ? classes.showBlur : classes.hideBlur}>
        <FaInstagram color="#fff" size={35} className="icon" />
      </div>
      <img src={original} alt={caption} className={classes.img} />
    </a>
  )
}

Thumb.propTypes = {
  id: PropTypes.string,
  original: PropTypes.string,
  caption: PropTypes.string,
}
