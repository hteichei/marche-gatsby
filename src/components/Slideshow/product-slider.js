import React from 'react'
import { Slide } from 'react-slideshow-image'
import { makeStyles } from '@material-ui/styles'

import { Img } from '../../utils/styles'

const useStyles = makeStyles({
  imageContainer: {
    width: '100%',
    height: 600,
  },
  image: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
  },
})

export const ProductSlider = ({ images, slideProperties }) => {
  const classes = useStyles()
  return (
    <Slide {...slideProperties}>
      {images.map((img, idx) => (
        <div className={classes.imageContainer} key={idx}>
          <Img fluid={img.localFile.childImageSharp.fluid} key={img.id} />
        </div>
      ))}
    </Slide>
  )
}

ProductSlider.defaultProps = {
  slideProperties: {
    duration: 5000,
    autoplay: false,
    arrows: true,
    transitionDuration: 350,
    infinite: true,
    indicators: false,
  },
}
