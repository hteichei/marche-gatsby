import React, { useState } from 'react'
import {
  TextField,
  Button,
  withStyles,
  CircularProgress,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const useStyles = makeStyles({
  container: {
    margin: '0 120px 50px 0',
  },
  inputRoot: {
    padding: 7.5,
    borderRadius: 2,
    border: '1px solid #636363',
    backgroundColor: '#fff',
  },
  form: {
    width: 300,
    '@media (max-width: 400px)': {
      width: 200,
    },
  },
})

export const Subscribe = () => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    await setLoading(true)
    addToMailchimp(email).then(res => {
      if (res.result === 'success') {
        setMsg(res.msg)
      } else {
        setMsg(`Sorry, there's been a problem.  Please try again.`)
      }
    })
    setLoading(false)
    setEmail('')
  }

  return (
    <div className={classes.container}>
      <form
        htmlFor="subscribe"
        onSubmit={handleSubmit}
        className={classes.form}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 7.5,
          }}
        >
          <label
            htmlFor="subscribleForm"
            style={{ fontWeight: 300, letterSpacing: 1.3 }}
          >
            Join our Mailing List
          </label>
          <p>{msg ? msg : ''}</p>
          <TextField
            id="subscribeForm"
            placeholder="frank@email.com"
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
            InputProps={{
              disableUnderline: true,
              classes: { root: classes.inputRoot },
            }}
          />
        </div>
        <StyledButton disabled={!email.length} type="submit" id="subscribe">
          {loading ? <CircularProgress size={15} /> : 'Join'}
        </StyledButton>
      </form>
    </div>
  )
}

export const StyledButton = withStyles({
  root: {
    borderRadius: 2,
    border: '1px solid #636363',
    color: 'black',
    fontFamily: 'Oswald',
    padding: 4,
    backgroundColor: '#fff',
  },
  disabled: {
    borderRadius: 2,
    border: '1px solid #636363',
    color: 'black',
    fontFamily: 'Oswald',
    padding: 4,
    backgroundColor: '#fff',
  },
})(Button)
