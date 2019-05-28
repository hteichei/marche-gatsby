import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  addToCart: {
    margin: 10,
    border: '1px solid black',
    backgroundColor: '#fff',
    width: 250,
    height: 45,
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  buyNow: {
    margin: 10,
    border: '1px solid black',
    backgroundColor: '#f5f5f5',
    width: 250,
    height: 45,
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
    '&:focus': {
      outline: 'none',
    },
  },
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
    backgroundColor: 'transparent',
    outline: 'none',
    '&:focus': {
      outline: 'none',
    },
  },
})
