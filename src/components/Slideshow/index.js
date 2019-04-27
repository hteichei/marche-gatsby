import React from 'react'
import { Fade } from 'react-slideshow-image'

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
  arrows: false,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
}

export const Slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      {fadeImages.map((img, idx) => (
        <div className="each-fade" key={idx}>
          <div className="image-container" style={{ width: 800, height: 800 }}>
            <img
              src={img}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      ))}
    </Fade>
  )
}
