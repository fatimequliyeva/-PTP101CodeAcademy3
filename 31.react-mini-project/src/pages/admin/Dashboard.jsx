import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <div className={styles.header}>
        <h1 className={styles.title}>E-commerce Dashboard</h1>
      </div>

      <div className={styles.grid4}>
        <div className={styles.card}>
          <div className={styles.cardTitle}><h4>Total Orders</h4><span style={{ color: '#1e8e3e', fontSize: 12 }}>+3.2%</span></div>
          <div className={styles.value}>59</div>
          <div className={styles.spark} />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}><h4>Balance</h4><span style={{ color: '#1e8e3e', fontSize: 12 }}>+1.1%</span></div>
          <div className={styles.value}>$187,13</div>
          <div className={`${styles.spark} ${styles.sparkPink}`} />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}><h4>Sales</h4><span style={{ color: '#1e8e3e', fontSize: 12 }}>+0.7%</span></div>
          <div className={styles.value}>4,732</div>
          <div className={`${styles.spark} ${styles.sparkGold}`} />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}><h4>Refunds</h4><span style={{ color: '#dc3545', fontSize: 12 }}>-0.3%</span></div>
          <div className={styles.value}>0.00</div>
          <div className={`${styles.spark} ${styles.sparkGray}`} />
        </div>
      </div>

      <div className={styles.twoCol}>
        <div className={styles.box}>
          <h4>Recent Orders</h4>
          <div style={{ overflowX: 'auto' }}>
            <table className={styles.table}>
              <thead className={styles.thead}>
                <tr>
                  <th className={styles.th}>#</th>
                  <th className={styles.th}>Image</th>
                  <th className={styles.th}>Product Name</th>
                  <th className={styles.th}>Product id</th>
                  <th className={styles.th}>Quantity</th>
                  <th className={styles.th}>Price</th>
                  <th className={styles.th}>Order Time</th>
                  <th className={styles.th}>Customer</th>
                  <th className={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3,4].map((i)=>(
                  <tr key={i}>
                    <td className={styles.td}>{i}</td>
                    <td className={styles.td}><div style={{ width: 40, height: 40, borderRadius: 4, background: '#eee' }} /></td>
                    <td className={styles.td}>Product #{i}</td>
                    <td className={styles.td}>id00000{i}</td>
                    <td className={styles.td}>{i*5}</td>
                    <td className={styles.td}>${(i*80).toFixed(2)}</td>
                    <td className={styles.td}>25-08-2018 14:27:{i}2</td>
                    <td className={styles.td}>Customer {i}</td>
                    <td className={styles.td}>
                      <span style={{ padding: '4px 8px', borderRadius: 12, background: i%2? '#e6f4ea':'#e8f0fe', color: i%2? '#1e8e3e':'#1a73e8' }}>
                        {i%2? 'Delivered':'InTransit'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.box}>
          <h4>Customer Acquisition</h4>
          <div style={{ height: 220, background: 'linear-gradient(180deg,#e8f0fe,transparent)', borderRadius: 6 }} />
        </div>
      </div>

      <div className={styles.threeCol}>
        <div className={styles.box}>
          <h4>Product Category</h4>
          <div className={styles.donut} />
        </div>
        <div className={styles.box}>
          <h4>Product Sales</h4>
          <div className={styles.bars}>
            {[80,120,60,150,90].map((h,i)=>(
              <div key={i} className={styles.bar} style={{ height: h }} />
            ))}
          </div>
        </div>
        <div className={styles.box}>
          <h4>Top 5 Products</h4>
          <ul className={styles.list}>
            {[
              { name: 'iPhone S9 Limited', sales: 68_714 },
              { name: 'iBook Pro 2018', sales: 67_133 },
              { name: 'Headphone Blitz', sales: 32_717 },
              { name: 'Keyboard Max', sales: 21_540 },
              { name: 'Mouse Air', sales: 18_225 },
            ].map((p)=>(
              <li key={p.name} style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span>{p.name}</span>
                <span style={{ fontWeight: 600 }}>${p.sales.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
