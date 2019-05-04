import React from 'react'
import { Slide } from 'react-slideshow-image'
import { makeStyles } from '@material-ui/styles'

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
  const classes = useStyles()
  return (
    <Slide {...slideProperties}>
      {images.map((img, idx) => (
        <div key={idx}>
          <div className={classes.imageContainer}>
            <img src={img} className={classes.image} />
          </div>
        </div>
      ))}
    </Slide>
  )
}

Slideshow.defaultProps = {
  images: [
    require('./assets/IMG_1.jpg'),
    require('./assets/IMG_2.jpg'),
    require('./assets/IMG_3.jpg'),
    require('./assets/IMG_4.jpg'),
    require('./assets/IMG_5.jpg'),
  ],
  slideProperties: {
    duration: 5000,
    autoplay: true,
    arrows: true,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
  },
}
