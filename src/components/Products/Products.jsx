import { ProductList } from "../ProductList/ProductList";
import { getProducts } from "../fakeAPI";

export const Products = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};