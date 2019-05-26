import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core'

import { useStyles } from './styles'

export const QuantityForm = ({
  handleQuantity,
  handleUpOne,
  handleDownOne,
  quantity,
  available,
}) => {
  const classes = useStyles()
  return (
    <form className={classes.form}>
      <label style={{ display: 'none' }} htmlFor="quantity">
        Quantity
      </label>
      <TextField
        className={classes.textField}
        id="quantity"
        value={quantity}
        onChange={e => handleQuantity(e)}
        disabled={!available}
        helperText={!available && 'Sorry, this product is out of stock'}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <button
                className={classes.button}
                disabled={quantity === 1 || !available}
                onClick={e => handleDownOne(e)}
              >
                -
              </button>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="start">
              <button
                disabled={!available}
                className={classes.button}
                onClick={e => handleUpOne(e)}
              >
                +
              </button>
            </InputAdornment>
          ),
          disableUnderline: true,
          classes: { root: classes.inputRoot, input: classes.input },
        }}
      />
    </form>
  )
}
