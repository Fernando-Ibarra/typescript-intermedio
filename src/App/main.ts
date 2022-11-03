import { addProduct } from './products/product.service'

addProduct({
  id: '1',
  createdAt: new Date(),
  updatedAt: new Date(),
  title: 'Producto 1',
  stock:90,
  category: {
    id: '12',
    name: 'category 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})
