import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  container: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '0 50px',
    zIndex: 1350,
    fontFamily: 'Oswald',
    color: 'black',
    letterSpacing: 1.3,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 780px)': {
      padding: '0 20px',
    },
  },
  logo: {
    width: 150,
    height: 60,
    '@media (max-width: 400px)': {
      width: 120,
    },
  },
  navList: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    listStyleType: 'none',
    justifyContent: 'space-around',
    margin: '0 0 !important',
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
})
