import { useBasket } from '../../context/BasketContext';

export default function BasketPage() {
  const { items, setQty, remove, total, clear } = useBasket();
  return (
    <div style={{padding:16}}>
      <h2>Basket</h2>
      {items.length === 0 ? <div>Basket boşdur</div> : (
        <>
          <table style={{width:'100%',borderCollapse:'collapse'}}>
            <thead>
              <tr><th align="left">Məhsul</th><th>Qiymət</th><th>Say</th><th>Cəm</th><th></th></tr>
            </thead>
            <tbody>
              {items.map(i => (
                <tr key={i.id}>
                  <td style={{padding:8}}>{i.name}</td>
                  <td align="center">${i.price.toFixed(2)}</td>
                  <td align="center">
                    <input type="number" min="1" value={i.qty} onChange={(e)=>setQty(i.id, Number(e.target.value))} style={{width:60}}/>
                  </td>
                  <td align="center">${(i.price*i.qty).toFixed(2)}</td>
                  <td align="center"><button onClick={()=>remove(i.id)}>Sil</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:12}}>
            <button onClick={clear}>Səbəti təmizlə</button>
            <div>Toplam: <strong>${total.toFixed(2)}</strong></div>
          </div>
        </>
      )}
    </div>
  );
}

