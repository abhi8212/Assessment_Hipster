import { Product } from '@/redux/slices/productSlice';
import ProductCard from './ProductCard';

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store',
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <section className="px-4 py-6  ">
  <h2 className="text-xl font-semibold  text-center  text-gray-800 mb-4">Our Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </section>
  );
}
