import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  container: {
    width: 250,
    height: 400,
    margin: '20px 20px 40px',
  },
  image: {
    borderRadius: 5,
    boxShadow: '6px 6px 10px -6px rgba(0,0,0,0.53)',
  },
  label: {
    fontFamily: 'CustomThree',
    fontSize: 18,
    fontWeight: 300,
    textAlign: 'center',
    lineHeight: '10px',
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
