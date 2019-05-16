import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  container: {
    width: 250,
    margin: '20px 20px 40px',
  },
  image: {
    borderRadius: 5,
  },
  label: {
    fontFamily: 'Oswald',
    fontSize: 18,
    fontWeight: 300,
    textAlign: 'center',
    lineHeight: '20px',
    letterSpacing: '1.5px',
  },
  priceShow: {
    fontFamily: 'CustomFour',
    fontSize: 14,
    fontWeight: 300,
    textAlign: 'center',
    lineHeight: '5px',
  },
  priceHide: {
    display: 'none',
  },
})
