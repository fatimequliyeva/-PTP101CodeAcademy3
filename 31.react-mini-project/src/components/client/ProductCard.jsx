import { useBasket } from '../../context/BasketContext';
import { useWishlist } from '../../context/WishlistContext';

export default function ProductCard({ product }) {
  const { add } = useBasket();
  const { ids, toggle } = useWishlist();
  const wished = ids.includes(product.id);
  return (
    <div style={{border:'1px solid #eee',borderRadius:8,overflow:'hidden'}}>
      <div style={{height:160,background:`url(${product.image}) center/cover no-repeat`}} />
      <div style={{padding:12,display:'flex',flexDirection:'column',gap:8}}>
        <div style={{fontWeight:600}}>{product.name}</div>
        <div>${product.price.toFixed(2)}</div>
        <div style={{display:'flex',gap:8}}>
          <button onClick={() => add(product)}>Add to cart</button>
          <button onClick={() => toggle(product.id)}>{wished ? '♥' : '♡'}</button>
        </div>
      </div>
    </div>
  );
}

