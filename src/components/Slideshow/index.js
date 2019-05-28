import React from 'react'
import { Slide } from 'react-slideshow-image'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  imageContainer: {
    width: '100%',
    height: '92.25vh',
    position: 'relative',
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

export const Slideshow = ({ images, slideProperties }) => {
  const classes = useStyles()
  return (
    <Slide {...slideProperties}>
      {images.map((img, idx) => (
        <div className={classes.imageContainer} key={idx}>
          <div
            key={idx}
            className={classes.image}
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
      ))}
    </Slide>
  )
}

Slideshow.defaultProps = {
  images: [
    require('./assets/img_33.jpg'),
    require('./assets/img_11.jpg'),
    require('./assets/img_55.jpg'),
    require('./assets/img_88.jpg'),
    require('./assets/img_77.jpg'),
  ],
  slideProperties: {
    duration: 4000,
    autoplay: false,
    arrows: true,
    transitionDuration: 425,
    infinite: true,
    indicators: false,
  },
}
