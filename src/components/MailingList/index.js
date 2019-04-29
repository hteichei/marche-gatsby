import React, { useState } from 'react'
import { TextField, Button, withStyles } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  container: {
    margin: '40px 120px 50px 0',
  },
  inputRoot: {
    padding: 7.5,
    borderRadius: 0,
    border: '1px solid black',
  },
})

export const Subscribe = () => {
  const classes = useStyles()
  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    alert('hooray')
    setEmail('')
  }

  return (
    <div className={classes.container}>
      <form htmlFor="subscribe" onSubmit={handleSubmit} style={{ width: 300 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 7.5,
          }}
        >
          <label htmlFor="subscribleForm">Join our Mailing List</label>
          <TextField
            id="subscribeForm"
            placeholder="frank@email.com"
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
            InputProps={{
              disableOutline: true,
              disableUnderline: true,
              classes: { root: classes.inputRoot },
            }}
          />
        </div>
        <StyledButton disabled={!email.length} type="submit" id="subscribe">
          Join
        </StyledButton>
      </form>
    </div>
  )
}

export const StyledButton = withStyles({
  root: {
    borderRadius: 0,
    border: '1px solid black',
    color: 'black',
    fontFamily: 'Oswald',
    padding: 4,
  },
})(Button)
