import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  container: {
    height: 'auto',
    width: '100%',
    padding: '90px 0',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    '@media (max-width: 780px)': {
      flexWrap: 'wrap',
    },
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
  '@media (max-width: 780px)': {
    flexContainer: {
      flexWrap: 'wrap',
      alignContent: 'center',
    },
    link: {
      height: '33.332vw',
      width: '33.332%',
    },
    container: {
      paddingTop: 90,
    },
  },
})
