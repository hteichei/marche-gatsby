import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/styles'

import StoreContext from '../../../context/StoreContext'
import { QuantityForm } from '../../ProductForm/quantity-form'
import { ClassNames } from '@emotion/core'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid black',
    height: 200,
    width: '100%',
    justifyContent: 'space-around',
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: 30,
  },
  button: {
    padding: 0,
    border: 'none',
    backgroundColor: 'none',
    outline: 'none',
    color: '#C0C0C0',
    fontFamily: 'Oswald',
    fontWeight: 300,
    '&:hover': {
      color: '#DCDCDC',
      cursor: 'pointer',
    },
    '&:focus': {
      outline: 'none',
    },
  },
})

const LineItem = props => {
  // Hooks
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const context = useContext(StoreContext)
  const classes = useStyles()

  const { line_item } = props

  useEffect(
    () => {
      setPrice(props.line_item.attrs.variant.price)
      setQuantity(props.line_item.attrs.quantity.value)
    },
    [props]
  )

  // Handlers
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
      style={{ width: 80, height: 'auto', margin: '0 20px' }}
    />
  ) : null

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }

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
        <p style={{ margin: '0 15px' }}>${price}</p>
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
