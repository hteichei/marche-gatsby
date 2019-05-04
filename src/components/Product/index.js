import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { useStyles } from './styles'
import { Img } from '../../utils/styles'

const Product = ({ handle, images, title, price }) => {
  const classes = useStyles()

  const [priceShow, setPrice] = useState(false)
  return (
    <div
      className={classes.container}
      onMouseEnter={() => setPrice(true)}
      onMouseLeave={() => setPrice(false)}
    >
      <Link to={`/product/${handle}/`}>
        <Img
          className={classes.image}
          fluid={images[0].localFile.childImageSharp.fluid}
          alt={handle}
        />
      </Link>
      <p className={classes.label}>{title}</p>
      <p className={priceShow ? classes.priceShow : classes.priceHide}>
        ${price}
      </p>
    </div>
  )
}

Product.propTypes = {
  handle: PropTypes.string,
  images: PropTypes.array,
  title: PropTypes.string,
  price: PropTypes.number,
}

export default Product
