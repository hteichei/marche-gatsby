import React, { useContext, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Dialog, DialogContent, CircularProgress } from '@material-ui/core'
import { MdClose } from 'react-icons/md'

import { useStyles } from './cart.styles'
import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'
import { CheckoutButton, CloseButton } from './buttons'
import { hydrateCart, handleUpdateQuantity } from '../../state/app'
import { calculateTotal } from './helpers'

const Cart = ({ openDialog, handleClose, dispatch, lineItems }) => {
  const [loading, setLoading] = useState(true)
  const { checkout, updateLineItem, client } = useContext(StoreContext)
  const classes = useStyles()

  useEffect(
    () => {
      dispatch(hydrateCart(checkout.lineItems))
      setLoading(false)
    },
    [checkout]
  )

  const handleUpdateCart = () => {
    console.log('update', lineItems)
    return lineItems.map(item =>
      updateLineItem(client, checkout.id, item.id, item.quantity)
    )
  }

  const handleCheckout = async () => {
    setLoading(true)
    await handleUpdateCart()
    await window.open(checkout.webUrl)
    setLoading(false)
  }

  const _updateQuantity = item => dispatch(handleUpdateQuantity(item))

  if (loading) {
    return <CircularProgress />
  }

  console.log('lineItems', lineItems)

  return (
    <Dialog
      classes={{
        root: classes.dialogRoot,
        paperScrollPaper: classes.paperScroll,
        paper: classes.paperRoot,
      }}
      open={openDialog}
      onClose={() => handleClose()}
    >
      <div className={classes.titleRoot} disableTypography>
        <p className={classes.title}>Your Cart</p>
        <CloseButton
          className={classes.closeButton}
          aria-label="Close"
          onClick={handleClose}
        >
          <MdClose />
        </CloseButton>
      </div>
      <DialogContent classes={{ root: classes.contentRoot }}>
        {lineItems.map(line_item => {
          return (
            <LineItem
              key={line_item.id.toString()}
              line_item={line_item}
              updateQuantity={_updateQuantity}
            />
          )
        })}
        <div className={classes.priceInfo}>
          <div className={classes.subTotal}>
            <p style={{ margin: '0 10px' }}>Subtotal{` `}</p>
            <h3>${calculateTotal(lineItems)}</h3>
          </div>
          <br />
          <p style={{ margin: 0 }}>
            <em>Shipping and taxes calculated at checkout</em>
          </p>
          <br />
          <CheckoutButton className={classes.button} onClick={handleCheckout}>
            {loading ? <CircularProgress /> : 'Check out'}
          </CheckoutButton>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default connect(
  state => ({
    lineItems: state.app.lineItems,
  }),
  null
)(Cart)
