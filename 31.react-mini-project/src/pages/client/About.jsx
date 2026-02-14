import styles from './Home.module.css';

const About = () => {
  return (
    <>
      <div className={styles["product-banner"]}>
        <div className="container">
          <span className={styles["product-breadcrumb"]}>HOME ABOUT US</span>
          <h2>ABOUT US</h2>
        </div>
      </div>

      <div className="container section">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: 24, marginBottom: 12, color: '#000' }}>Welcome to Vegefoods</h3>
            <p style={{ color: '#808080', lineHeight: 1.8 }}>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
              there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
              a large language ocean.
            </p>
            <p style={{ color: '#808080', lineHeight: 1.8 }}>
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
              It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/vegefoods/images/about.jpg" alt="About" style={{ width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
