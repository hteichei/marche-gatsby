import React from 'react'

import { useInstaData } from './graphql'
import { Layout } from './layout'

const InstaFeed = () => {
  // Hooks
  const data = useInstaData()
  return <Layout data={data} />
}

export default InstaFeed
