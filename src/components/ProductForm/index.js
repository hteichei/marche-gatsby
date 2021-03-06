import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import StoreContext from '../../context/StoreContext'
import VariantSelector from './VariantSelector'
import { connect } from 'react-redux'
import { QuantityForm } from './quantity-form'
import { useStyles } from './styles'
import { handleAddItem } from '../../state/app'

const ProductForm = props => {
  const { dispatch, lineItems } = props
  // Hooks
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState(props.product.variants[0])
  const context = useContext(StoreContext)
  const classes = useStyles()

  const hasVariants = props.product.variants.length > 1
  const productVariant =
    context.client.product.helpers.variantForOptions(props.product, variant) ||
    variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  useEffect(() => {
    let defaultOptionValues = {}
    props.product.options.forEach(selector => {
      defaultOptionValues[selector.name] = selector.values[0]
    })
    setVariant(defaultOptionValues)
  }, [])

  useEffect(
    () => {
      checkAvailability(props.product.shopifyId)
    },
    [productVariant]
  )

  const checkAvailability = productId => {
    context.client.product.fetch(productId).then(product => {
      // this checks the currently selected variant for availability
      const result = product.variants.filter(
        variant => variant.id === productVariant.shopifyId
      )
      setAvailable(result[0].available)
    })
  }

  const handleQuantityChange = event => {
    setQuantity(event.target.value)
  }

  const handleOptionChange = event => {
    const { target } = event
    setVariant(prevState => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const handleAddToCart = () => {
    context.addVariantToCart(productVariant.shopifyId, quantity)
  }

  const handleUpOne = e => {
    e.preventDefault()
    setQuantity(Number(quantity) + 1)
  }

  const handleDownOne = e => {
    e.preventDefault()
    setQuantity(Number(quantity) - 1)
  }

  const variantSelectors = hasVariants
    ? props.product.options.map(option => {
        return (
          <VariantSelector
            onChange={handleOptionChange}
            key={option.id.toString()}
            option={option}
          />
        )
      })
    : null

  return (
    <div className={classes.container}>
      <h3>${productVariant.price}</h3>
      {variantSelectors}
      <label>Quantity</label>
      <QuantityForm
        quantity={quantity}
        handleQuantity={handleQuantityChange}
        handleUpOne={handleUpOne}
        handleDownOne={handleDownOne}
        available={available}
      />
      <br />
      <button
        type="submit"
        disabled={!available}
        onClick={handleAddToCart}
        // onClick={() => dispatch(handleAddItem({ ...productVariant, quantity }))}
        className={classes.addToCart}
      >
        Add to Cart ${quantity * productVariant.price}
      </button>
      <button className={classes.buyNow}>Buy it now</button>
      {!available && <p>This Product is out of Stock!</p>}
    </div>
  )
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default connect(
  state => ({
    lineItems: state.app.lineItems,
  }),
  null
)(ProductForm)
