import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__header}>
        <h1 className={styles.dashboard__title}>E-commerce Dashboard</h1>
      </div>

      <div className={styles.dashboard__grid}>
        <div className={styles.dashboard__card}>
          <div className={styles.dashboard__cardTitle}>
            <h4>Total Orders</h4>
            <span className={`${styles.dashboard__delta} ${styles["dashboard__delta--up"]}`}>+3.2%</span>
          </div>
          <div className={styles.dashboard__value}>59</div>
          <div className={styles.dashboard__spark} />
        </div>
        <div className={styles.dashboard__card}>
          <div className={styles.dashboard__cardTitle}>
            <h4>Balance</h4>
            <span className={`${styles.dashboard__delta} ${styles["dashboard__delta--up"]}`}>+1.1%</span>
          </div>
          <div className={styles.dashboard__value}>$187,13</div>
          <div className={`${styles.dashboard__spark} ${styles["dashboard__spark--pink"]}`} />
        </div>
        <div className={styles.dashboard__card}>
          <div className={styles.dashboard__cardTitle}>
            <h4>Sales</h4>
            <span className={`${styles.dashboard__delta} ${styles["dashboard__delta--up"]}`}>+0.7%</span>
          </div>
          <div className={styles.dashboard__value}>4,732</div>
          <div className={`${styles.dashboard__spark} ${styles["dashboard__spark--gold"]}`} />
        </div>
        <div className={styles.dashboard__card}>
          <div className={styles.dashboard__cardTitle}>
            <h4>Refunds</h4>
            <span className={`${styles.dashboard__delta} ${styles["dashboard__delta--down"]}`}>-0.3%</span>
          </div>
          <div className={styles.dashboard__value}>0.00</div>
          <div className={`${styles.dashboard__spark} ${styles["dashboard__spark--gray"]}`} />
        </div>
      </div>

      <div className={styles.dashboard__section}>
        <div className={styles.dashboard__panel}>
          <h4>Recent Orders</h4>
          <div className={styles.dashboard__tableWrap}>
            <table className={styles.dashboard__table}>
              <thead className={styles.dashboard__thead}>
                <tr>
                  <th className={styles.dashboard__th}>#</th>
                  <th className={styles.dashboard__th}>Image</th>
                  <th className={styles.dashboard__th}>Product Name</th>
                  <th className={styles.dashboard__th}>Product id</th>
                  <th className={styles.dashboard__th}>Quantity</th>
                  <th className={styles.dashboard__th}>Price</th>
                  <th className={styles.dashboard__th}>Order Time</th>
                  <th className={styles.dashboard__th}>Customer</th>
                  <th className={styles.dashboard__th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3,4].map((i)=>(
                  <tr key={i}>
                    <td className={styles.dashboard__td}>{i}</td>
                    <td className={styles.dashboard__td}><div style={{ width: 40, height: 40, borderRadius: 4, background: '#eee' }} /></td>
                    <td className={styles.dashboard__td}>Product #{i}</td>
                    <td className={styles.dashboard__td}>id00000{i}</td>
                    <td className={styles.dashboard__td}>{i*5}</td>
                    <td className={styles.dashboard__td}>${(i*80).toFixed(2)}</td>
                    <td className={styles.dashboard__td}>25-08-2018 14:27:{i}2</td>
                    <td className={styles.dashboard__td}>Customer {i}</td>
                    <td className={styles.dashboard__td}>
                      <span className={`${styles.dashboard__badge} ${i%2 ? styles["dashboard__badge--success"] : styles["dashboard__badge--info"]}`}>
                        {i%2 ? 'Delivered' : 'InTransit'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.dashboard__panel}>
          <h4>Customer Acquisition</h4>
          <div className={styles.dashboard__chart} />
        </div>
      </div>

      <div className={styles.dashboard__section}>
        <div className={styles.dashboard__panel}>
          <h4>Product Category</h4>
          <div className={styles.dashboard__donut} />
        </div>
        <div className={styles.dashboard__panel}>
          <h4>Product Sales</h4>
          <div className={styles.dashboard__bars}>
            {[80,120,60,150,90].map((h,i)=>(
              <div key={i} className={styles.dashboard__bar} style={{ height: h }} />
            ))}
          </div>
        </div>
        <div className={styles.dashboard__panel}>
          <h4>Top 5 Products</h4>
          <ul className={styles.dashboard__list}>
            {[
              { name: 'iPhone S9 Limited', sales: 68_714 },
              { name: 'iBook Pro 2018', sales: 67_133 },
              { name: 'Headphone Blitz', sales: 32_717 },
              { name: 'Keyboard Max', sales: 21_540 },
              { name: 'Mouse Air', sales: 18_225 },
            ].map((p)=>(
              <li key={p.name} className={styles.dashboard__listItem}>
                <span>{p.name}</span>
                <span className={styles.dashboard__listValue}>${p.sales.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
