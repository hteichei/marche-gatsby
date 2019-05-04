import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  container: {
    width: 250,
    height: 400,
    margin: '20px 20px 40px',
  },
  image: {
    borderRadius: 5,
    boxShadow: '6px 6px 10px -6px rgba(0,0,0,0.53)',
  },
  link: {
    color: 'black',
    margin: '5px 0',
    textDecoration: 'none',
    letterSpacing: 1.5,
    '&:hover': {
      color: 'rgba(0,0,0,.5)',
      textDecoration: 'none',
    },
  },
})
