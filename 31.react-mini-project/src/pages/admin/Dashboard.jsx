const cardStyle = {
  background: '#fff',
  borderRadius: 8,
  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  padding: 16,
  flex: 1,
  minWidth: 220
};

const boxStyle = {
  background: '#fff',
  borderRadius: 8,
  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  padding: 16
};

const Dashboard = () => {
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>E-commerce Dashboard</h1>
        <input placeholder="Search..." style={{ padding: '10px 12px', border: '1px solid #ddd', borderRadius: 6, width: 260 }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0 }}>Total Revenue</h4>
            <span style={{ color: '#28a745', fontSize: 12 }}>+5.86%</span>
          </div>
          <p style={{ fontSize: 24, fontWeight: 700, margin: '10px 0' }}>$12099</p>
          <div style={{ height: 60, background: 'linear-gradient(180deg,#a8c7f0,transparent)', borderRadius: 6 }} />
        </div>
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0 }}>Affiliate Revenue</h4>
            <span style={{ color: '#28a745', fontSize: 12 }}>+5.86%</span>
          </div>
          <p style={{ fontSize: 24, fontWeight: 700, margin: '10px 0' }}>$12099</p>
          <div style={{ height: 60, background: 'linear-gradient(180deg,#f3a6b5,transparent)', borderRadius: 6 }} />
        </div>
        <div style={cardStyle}>
          <h4 style={{ margin: 0 }}>Refunds</h4>
          <p style={{ fontSize: 24, fontWeight: 700, margin: '10px 0' }}>0.00</p>
          <div style={{ height: 60, background: '#f7f7f7', borderRadius: 6 }} />
        </div>
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0 }}>Avg. Revenue Per User</h4>
            <span style={{ color: '#dc3545', fontSize: 12 }}>-2.06%</span>
          </div>
          <p style={{ fontSize: 24, fontWeight: 700, margin: '10px 0' }}>$28000</p>
          <div style={{ height: 60, background: 'linear-gradient(180deg,#f7d695,transparent)', borderRadius: 6 }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20 }}>
        <div style={boxStyle}>
          <h4 style={{ marginBottom: 12 }}>Recent Orders</h4>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f9fa' }}>
                  <th style={{ textAlign: 'left', padding: 10 }}>#</th>
                  <th style={{ textAlign: 'left', padding: 10 }}>Image</th>
                  <th style={{ textAlign: 'left', padding: 10 }}>Product Name</th>
                  <th style={{ textAlign: 'left', padding: 10 }}>Product id</th>
                  <th style={{ textAlign: 'left', padding: 10 }}>Quantity</th>
                  <th style={{ textAlign: 'left', padding: 10 }}>Price</th>
                  <th style={{ textAlign: 'left', padding: 10 }}>Order Time</th>
                  <th style={{ textAlign: 'left', padding: 10 }}>Customer</th>
                  <th style={{ textAlign: 'left', padding: 10 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3,4].map((i)=>(
                  <tr key={i} style={{ borderTop: '1px solid #eee' }}>
                    <td style={{ padding: 10 }}>{i}</td>
                    <td style={{ padding: 10 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 4, background: '#eee' }} />
                    </td>
                    <td style={{ padding: 10 }}>Product #{i}</td>
                    <td style={{ padding: 10 }}>id00000{i}</td>
                    <td style={{ padding: 10 }}>{i*5}</td>
                    <td style={{ padding: 10 }}>${(i*80).toFixed(2)}</td>
                    <td style={{ padding: 10 }}>25-08-2018 14:27:{i}2</td>
                    <td style={{ padding: 10 }}>Customer {i}</td>
                    <td style={{ padding: 10 }}>
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
        <div style={boxStyle}>
          <h4 style={{ marginBottom: 12 }}>Customer Acquisition</h4>
          <div style={{ height: 220, background: 'linear-gradient(180deg,#e8f0fe,transparent)', borderRadius: 6 }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
        <div style={boxStyle}>
          <h4 style={{ marginBottom: 12 }}>Product Category</h4>
          <div style={{ width: 220, height: 220, borderRadius: '50%', margin: '0 auto', background: 'conic-gradient(#82ae46 0 35%, #f3a6b5 35% 60%, #a8c7f0 60% 100%)' }} />
        </div>
        <div style={boxStyle}>
          <h4 style={{ marginBottom: 12 }}>Product Sales</h4>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', height: 220 }}>
            {[80,120,60,150,90].map((h,i)=>(
              <div key={i} style={{ width: 26, height: h, background: '#82ae46', borderRadius: 6 }} />
            ))}
          </div>
        </div>
        <div style={boxStyle}>
          <h4 style={{ marginBottom: 12 }}>Top Performing Campaigns</h4>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10 }}>
            {[1,2,3,4,5].map(i=>(
              <li key={i} style={{ display: 'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span>Campaign #{i}</span>
                <span style={{ fontWeight: 600 }}>${(i*2000).toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
