import { useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductsContext';
import { useBasket } from '../../context/BasketContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { products } = useProducts();
  const { add } = useBasket();
  const p = products.find(x => x.id === id);
  if (!p) return <div style={{padding:16}}>Məhsul tapılmadı</div>;
  return (
    <div style={{padding:16,display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
      <div style={{height:360,background:`url(${p.image}) center/cover no-repeat`}} />
      <div>
        <h2>{p.name}</h2>
        <div style={{margin:'8px 0'}}>${p.price.toFixed(2)}</div>
        <p>{p.description}</p>
        <button onClick={()=>add(p)}>Səbətə at</button>
      </div>
    </div>
  );
}
