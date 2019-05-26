import React, { useState, useEffect, useContext } from 'react'

import StoreContext from '../../../context/StoreContext'
import { QuantityForm } from '../../ProductForm/quantity-form'
import { useStyles } from './styles'

const LineItem = props => {
  // Hooks
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const context = useContext(StoreContext)
  const classes = useStyles()

  const { line_item, updateQuantity } = props

  useEffect(() => {
    setPrice(line_item.variant.price)
    setQuantity(line_item.quantity)
  }, [])

  useEffect(
    () => {
      updateQuantity({ ...line_item, quantity })
    },
    [quantity]
  )

  const handleQuantity = e => {
    e.preventDefault()
    setQuantity(e.target.value)
  }
  const handleDownOne = async e => {
    e.preventDefault()
    await setQuantity(Number(quantity) - 1)
  }
  const handleUpOne = async e => {
    e.preventDefault()
    await setQuantity(Number(quantity) + 1)
  }

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      style={{ width: 80, height: 'auto', margin: '0 20px' }}
    />
  ) : null

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }

  console.log('line_ITEM', line_item)
  console.log('id', line_item.id)

  return (
    <div className={classes.container}>
      <div>{variantImage} </div>
      <div className={classes.productInfo}>
        <p style={{ maxWidth: 200, width: '100%' }}>
          {line_item.title.toUpperCase()}
        </p>
        <div>
          <button className={classes.button} onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ margin: '0 15px' }}>${Number(price)}</p>
        <QuantityForm
          quantity={quantity}
          handleQuantity={handleQuantity}
          handleUpOne={handleUpOne}
          handleDownOne={handleDownOne}
          available={true}
        />
        <p style={{ margin: '0 15px' }}>${price * quantity}</p>
      </div>
    </div>
  )
}

export default LineItem
