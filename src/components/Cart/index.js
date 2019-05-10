import React, { useContext } from 'react'
import {
  Dialog,
  DialogContent,
  Button,
  withStyles,
  IconButton,
  MuiDialogTitle,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { MdClose } from 'react-icons/md'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'
// import { StyledDialogTitle } from './dialog/dialogTitle'

const useStyles = makeStyles({
  priceInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Oswald',
    fontWeight: 300,
  },
  subTotal: {
    display: 'flex',
    alignItems: 'center',
    margin: '30px 10px 10px',
  },
  titleRoot: {
    display: 'flex',
    borderBottom: `1px solid black`,
    margin: 0,
    padding: 5,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center !important',
  },
  closeButton: {
    position: 'abolute !important',
    top: 5,
    right: 10,
  },
  paperRoot: {},
  paperScroll: {},
  '@media (max-width: 600px)': {
    paperRoot: {
      margin: '0px !important',
      height: '100vh',
      width: '100vw',
    },
    paperScroll: {
      maxHeight: '100% !important',
    },
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

  const emptyCart = !line_items

  return (
    <Dialog
      classes={{
        paperScrollPaper: classes.paperScroll,
        paper: classes.paperRoot,
      }}
      open={openDialog}
      onClose={() => handleClose()}
    >
      <div className={classes.titleRoot} disableTypography>
        <p style={{ margin: 0 }}>Your Cart</p>
        <IconButton
          className={classes.closeButton}
          aria-label="Close"
          onClick={handleClose}
        >
          <MdClose />
        </IconButton>
      </div>
      <DialogContent>
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

export const CheckoutButton = withStyles({
  root: {
    margin: 10,
    border: '1px solid black',
    borderRadius: 2,
    backgroundColor: '#f5f5f5',
    width: '100%',
    height: 45,
  },
  label: {
    fontFamily: 'Oswald',
    fontWeight: 300,
  },
})(Button)
