import React, { useState, useEffect, useContext } from 'react'

import StoreContext from '../../../context/StoreContext'
import { QuantityForm } from '../../ProductForm/quantity-form'

const LineItem = props => {
  const context = useContext(StoreContext)
  const { line_item } = props
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)

  useEffect(
    () => {
      setPrice(props.line_item.attrs.variant.price)
      setQuantity(props.line_item.attrs.quantity.value)
    },
    [props]
  )

  const handleUpdateCart = () => {
    context.updateLineItem(
      context.client,
      context.checkout.id,
      line_item.id,
      quantity
    )
  }

  const handleQuantity = e => {
    setQuantity(e.target.value)
  }
  const handleDownOne = e => {
    e.preventDefault()
    setQuantity(Number(quantity) - 1)
  }
  const handleUpOne = async e => {
    e.preventDefault()
    await setQuantity(Number(quantity) + 1)
    handleUpdateCart()
  }

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      style={{ width: 80, height: 'auto', margin: 20 }}
    />
  ) : null

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid black',
        height: 200,
        width: '100%',
        justifyContent: 'space-around',
      }}
    >
      <div>{variantImage} </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <p style={{ maxWidth: 200, width: '100%' }}>
          {line_item.title.toUpperCase()}
        </p>
        <div>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ margin: '0 15px' }}>${price}</p>
        <QuantityForm
          quantity={quantity}
          handleQuantity={handleQuantity}
          handleUpOne={handleUpOne}
          handleDownOne={handleDownOne}
        />
        <p style={{ margin: '0 15px' }}>${price * quantity}</p>
      </div>
    </div>
  )
}

export default LineItem
