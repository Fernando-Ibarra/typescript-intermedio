import { Product } from '../products/product.model'
import { User } from '../users/user.model'


interface Order {
  id: string | number;
  createdAt: Date;
  product: Product[];
  user: User;
}