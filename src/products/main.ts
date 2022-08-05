import { addProducts, calcStock, products } from './product.service'

addProducts({
  title: 'Prodcut 1',
  createdAt: new Date(),
  stock: 5
})

addProducts({
  title: 'Product 2',
  createdAt: new Date(),
  stock: 6,
  size: 'L'
})

console.log(products)

const total = calcStock()

console.log(total)
