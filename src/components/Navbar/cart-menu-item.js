import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { IconButton } from '@material-ui/core'
import styled from '@emotion/styled'

const CartCounter = styled.span({
  backgroundColor: `white`,
  color: `black`,
  borderRadius: `50%`,
  padding: `0 7.5px`,
  fontSize: `1rem`,
  float: `right`,
  margin: `0px -10px`,
  zIndex: 999,
})

export const CartMenuItem = ({ lineItems, handleOpenDialog }) => (
  <div>
    {lineItems.length !== 0 && <CartCounter>{lineItems.length}</CartCounter>}
    <IconButton style={{ outline: 'none' }} onClick={() => handleOpenDialog()}>
      <FaShoppingCart size={25} />
    </IconButton>
  </div>
)
