import React from 'react'
import { Slide } from 'react-slideshow-image'
import { makeStyles } from '@material-ui/styles'

import { Img } from '../../utils/styles'

const useStyles = makeStyles({
  imageContainer: {
    width: '100%',
    height: '100vh',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
})

export const Slideshow = ({ images, slideProperties }) => {
  alert('hello')
  console.log('images', images)
  const classes = useStyles()
  return (
    <Slide {...slideProperties}>
      {images.map((img, idx) => (
        <div key={idx}>
          <div className={classes.imageContainer}>
            <Img
              fluid={img.localFile.childImageSharp.fluid}
              key={img.id}
              alt={img.product.title}
            />
          </div>
        </div>
      ))}
    </Slide>
  )
}

Slideshow.defaultProps = {
  slideProperties: {
    duration: 5000,
    // autoplay: true,
    arrows: true,
    transitionDuration: 350,
    infinite: true,
    indicators: false,
  },
}
