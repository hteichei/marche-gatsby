import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  priceInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Oswald',
    fontWeight: 300,
  },
  subTotal: {
    display: 'flex',
    alignItems: 'center',
    margin: '30px 10px 0px',
  },
  dialogRoot: {
    zIndex: '1600 !important',
  },
  titleRoot: {
    display: 'flex',
    borderBottom: `1px solid black`,
    margin: 0,
    padding: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center !important',
  },
  title: {
    margin: 0,
    fontFamily: 'Oswald',
    fontWeight: 300,
    fontSize: 18,
  },
  closeButton: {
    position: 'abolute !important',
    top: 5,
    right: 10,
  },
  contentRoot: {
    padding: '0px !important',
  },
  paperRoot: {},
  paperScroll: {},
  '@media (max-width: 600px)': {
    paperRoot: {
      margin: '0px !important',
      height: '100vh',
      width: '100vw',
    },
    paperScroll: {
      maxHeight: '100% !important',
    },
  },
})
