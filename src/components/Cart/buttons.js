import { withStyles, Button, IconButton } from '@material-ui/core'

export const CheckoutButton = withStyles({
  root: {
    borderRadius: '0 0 2px 2px',
    backgroundColor: '#f5f5f5',
    width: '100%',
    height: 45,
  },
  label: {
    fontFamily: 'Oswald',
    fontWeight: 300,
  },
})(Button)

export const CloseButton = withStyles({
  root: {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 5,
  },
})(IconButton)
