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
  slideContainer: {
    marginTop: 60,
    '@media (max-width: 768px)': {
      marginTop: 0,
    },
  },
})

const fadeImages = [
  require('./assets/IMG_1.jpg'),
  require('./assets/IMG_2.jpg'),
  require('./assets/IMG_3.jpg'),
  require('./assets/IMG_4.jpg'),
  require('./assets/IMG_5.jpg'),
]

const fadeProperties = {
  duration: 4000,
  autoplay: true,
  arrows: true,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
}

const properties = {
  duration: 5000,
  autoplay: true,
  arrows: true,
  transitionDuration: 350,
  infinite: true,
  indicators: false,
}

export const Slideshow = () => {
  const classes = useStyles()
  return (
    <div className={classes.slideContainer}>
      <Slide {...properties}>
        {fadeImages.map((img, idx) => (
          <div className="each-fade" key={idx}>
            <div className={classes.imageContainer}>
              <img src={img} className={classes.image} />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}
