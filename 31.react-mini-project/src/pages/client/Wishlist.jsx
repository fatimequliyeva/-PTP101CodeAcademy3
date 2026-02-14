import { useWishlist } from '../../context/WishlistContext';
import { useProducts } from '../../context/ProductsContext';
import ProductCard from '../../components/client/ProductCard';

export default function WishlistPage() {
  const { ids, clear } = useWishlist();
  const { products } = useProducts();
  const wished = products.filter(p => ids.includes(p.id));
  return (
    <div style={{padding:16}}>
      <h2>Wishlist</h2>
      {wished.length === 0 ? <div>Wishlist boşdur</div> : (
        <>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:12}}>
            {wished.map(p => <ProductCard key={p.id} product={p}/>)}
          </div>
          <div style={{marginTop:12,display:'flex',justifyContent:'flex-end'}}>
            <button onClick={clear}>Hamısını sil</button>
          </div>
        </>
      )}
    </div>
  );
}

