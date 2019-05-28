import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
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
    backgroundColor: 'transparent',
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
