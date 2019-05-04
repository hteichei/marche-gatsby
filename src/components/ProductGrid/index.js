import React from 'react'
import { makeStyles } from '@material-ui/styles'

import { useShopData } from './graphql'
import Product from './product'

const useStyles = makeStyles({
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
})

const ProductGrid = () => {
  // Hooks
  const data = useShopData()
  const classes = useStyles()

  return (
    <div className={classes.flexContainer}>
      {data.allShopifyProduct.edges.map(x => {
        const { id, handle, images, title, variants } = x.node
        return (
          <Product
            key={id}
            handle={handle}
            images={images}
            title={title}
            price={variants[0].price}
          />
        )
      })}
    </div>
  )
}

export default ProductGrid
