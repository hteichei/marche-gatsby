import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  container: {
    height: 400,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 240,
  },
  showBlur: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.4)',
  },
  hideBlur: {
    display: 'none',
  },
  img: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  link: {
    position: 'relative',
    height: '16.666vw',
    width: '16.666%',
    border: '2px solid #fff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
})
