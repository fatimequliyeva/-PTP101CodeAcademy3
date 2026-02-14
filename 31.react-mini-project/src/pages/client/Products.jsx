import { useProducts } from '../../context/ProductsContext';
import ProductCard from '../../components/client/ProductCard';

export default function Products() {
  const { products } = useProducts();
  return (
    <div style={{padding:16}}>
      <h2>Shop</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:12}}>
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
