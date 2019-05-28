import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  list: {
    width: '100vw',
  },
  listRoot: {
    padding: '0 !important',
  },
  fullList: {
    width: 'auto',
  },
  backdrop: {
    top: '60px !important',
  },
  paperTop: {
    top: '60px !important',
  },
  link: {
    color: 'black',
    margin: 0,
    textDecoration: 'none',
    letterSpacing: 1.5,
    '&:hover': {
      color: 'rgba(0,0,0,.5)',
      textDecoration: 'none',
    },
  },
  elevation16: {
    // Not working yet
    boxShadow: 'none !important',
  },
})
