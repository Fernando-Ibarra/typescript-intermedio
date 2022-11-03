type Sizes = 'S' | 'M' | 'L' | 'XL';

// Conjunto de atributos de valores
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];
products.push({
  id: '1',
  title: 'Producto 1',
  createdAt: new Date(),
  stock:90,
})

const addProduct = (data: Product) => {
products.push(data)
}
