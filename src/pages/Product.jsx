import React, { useContext } from 'react'
import { productItems } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrum from '../components/BreadCrum/BreadCrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';

const Product = () => {
  const {all_product} = useContext(productItems);
  const {productId} = useParams()
  // console.log(productId)
  const product = all_product.find((val) => val.id === Number(productId))
  console.log(product)
  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product
