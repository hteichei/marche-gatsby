import React from 'react'
import { Slide } from 'react-slideshow-image'
import { makeStyles } from '@material-ui/styles'

import { img_11 } from '../../images/img_11.jpg'
import { img_33 } from '../../images/img_33.jpg'
import { img_55 } from '../../images/img_55.jpg'
import { img_77 } from '../../images/img_77.jpg'
import { img_88 } from '../../images/img_88.jpg'

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
      {images.map((img, idx) => {
        console.log('src', img)
        return (
          <div className={classes.imageContainer} key={idx}>
            <img key={idx} className={classes.image} src={img} />
          </div>
        )
      })}
    </Slide>
  )
}

Slideshow.defaultProps = {
  images: [img_11, img_33, img_55, img_77, img_88],
  slideProperties: {
    duration: 4000,
    autoplay: false,
    arrows: true,
    transitionDuration: 425,
    infinite: true,
    indicators: false,
  },
}
