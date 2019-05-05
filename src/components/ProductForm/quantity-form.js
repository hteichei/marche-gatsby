import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    width: 140,
  },
  inputRoot: {
    padding: 7.5,
    borderRadius: 2,
    border: '1px solid #636363',
    textAlign: 'center',
  },
  input: {
    textAlign: 'center',
  },
  button: {
    border: 'none',
    backgroundColor: 'none',
    outline: 'none',
    '&:focus': {
      outline: 'none',
    },
  },
})

export const QuantityForm = ({
  handleQuantity,
  handleUpOne,
  handleDownOne,
  quantity,
}) => {
  const classes = useStyles()
  return (
    <form className={classes.form}>
      <label htmlFor="quantity">Quantity</label>
      <TextField
        className={classes.textField}
        id="quantity"
        value={quantity}
        onChange={e => handleQuantity(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <button
                className={classes.button}
                disabled={quantity === 1}
                onClick={e => handleDownOne(e)}
              >
                -
              </button>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="start">
              <button className={classes.button} onClick={e => handleUpOne(e)}>
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
