import products from '../fake-data/all-products';
import { ProductsItem } from './ProductsItem';

export const Products = ({ categoryName }) => {
  let filteredProducts =
    categoryName === 'all'
      ? products
      : products.filter(product => categoryName === product.category);

  return (
    <ul className='products'>
      {filteredProducts.map(product => (
        <li key={product.id} className='products--item'>
          <ProductsItem product={product} />
        </li>
      ))}
    </ul>
  );
};
