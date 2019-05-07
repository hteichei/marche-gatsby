import React, { useContext } from 'react'
import { Dialog, DialogContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'

const useStyles = makeStyles({
  button: {
    margin: 10,
    border: '1px solid black',
    backgroundColor: '#f5f5f5',
    width: '100%',
    height: 45,
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  priceInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Oswald',
  },
})

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
    <Dialog open={openDialog} onClose={() => handleClose()}>
      <DialogContent>
        {line_items}
        <div className={classes.priceInfo}>
          <div style={{ display: 'flex', alignItems: 'center', margin: 10 }}>
            <p style={{ margin: '0 10px' }}>Subtotal{` `}</p>
            <h3>${checkout.subtotalPrice}</h3>
          </div>
          <br />
          <p>Shipping and taxes calculated at checkout</p>
          <br />
          <button className={classes.button} onClick={handleCheckout}>
            Check out
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Cart
