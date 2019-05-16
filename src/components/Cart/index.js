import React, { useContext } from 'react'
import { Dialog, DialogContent } from '@material-ui/core'
import { MdClose } from 'react-icons/md'

import { useStyles } from './cart.styles'
import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'
import { CheckoutButton, CloseButton } from './buttons'

const Cart = ({ openDialog, handleClose }) => {
  const context = useContext(StoreContext)
  const classes = useStyles()
  const { checkout } = context

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

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
        {line_items}
        <div className={classes.priceInfo}>
          <div className={classes.subTotal}>
            <p style={{ margin: '0 10px' }}>Subtotal{` `}</p>
            <h3>${checkout.subtotalPrice}</h3>
          </div>
          <br />
          <p style={{ margin: 0 }}>
            <em>Shipping and taxes calculated at checkout</em>
          </p>
          <br />
          <CheckoutButton className={classes.button} onClick={handleCheckout}>
            Check out
          </CheckoutButton>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Cart
