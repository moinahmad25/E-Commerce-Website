import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offer from '../components/Offer/Offer'
import data_product from '../components/assets/data'
import new_collection from '../components/assets/new_collections'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular heading="Popular Womens Product" product={data_product} />
      <Offer />
      <Popular heading="new collection" product={new_collection} />
      <NewsLetter />
    </div>
  )
}

export default Shop
