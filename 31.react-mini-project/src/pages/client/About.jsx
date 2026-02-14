import styles from './Home.module.css';

const About = () => {
  const aboutVideo = 'https://www.youtube.com/shorts/k49bnX0wyes';
  const toYouTubeEmbed = (url) => {
    try {
      const u = new URL(url);
      let id = '';
      if (u.hostname.includes('youtu.be')) {
        id = u.pathname.replace('/', '');
      } else if (u.pathname.includes('/watch')) {
        id = u.searchParams.get('v') || '';
      } else if (u.pathname.includes('/shorts/')) {
        id = u.pathname.split('/shorts/')[1].split('/')[0];
      }
      if (!id) return null;
      return `https://www.youtube.com/embed/${id}?controls=1&modestbranding=1&rel=0`;
    } catch {
      return null;
    }
  };
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
            <h3 style={{ fontSize: 24, marginBottom: 12, color: '#000' }}>FATIMA GULIYEVA</h3>
            <p style={{ color: '#808080', lineHeight: 1.8 }}>
              Mənim adım Fatimədir. Həyatımın ən böyük hədiyyəsi iki gözəl qızım – Nəfəsim və Jasminimdir. Onlar mənim nəfəsim, gücüm, yaşamaq səbəbimdir. Hər gün onların üzündəki təbəssümü görmək mənə dünyaları verir. Mən onları sözlə ifadə olunmayacaq qədər çox sevirəm.
            </p>
            <p style={{ color: '#808080', lineHeight: 1.8 }}>
              Ana olmaq mənim üçün sadəcə bir ad deyil, böyük bir məsuliyyət və sonsuz bir sevgidir. Mən çalışıram ki, həm yaxşı bir ana, həm də təhsil alan, öz üzərində çalışan bir qadın olum. Çünki bilirəm ki, güclü və savadlı ana, güclü və savadlı övladlar yetişdirir. Oxumağım, öyrənməyim, irəliləməyim ilk növbədə qızlarım üçündür.
            </p>
            <p style={{ color: '#808080', lineHeight: 1.8 }}>
              Nəfəs və Jasmin üçün hər şeyə hazıram. Onların xoşbəxtliyi, gələcəyi və arzuları mənim üçün hər şeydən önəmlidir. Mən hər zaman onların yanında olacağam, onları qoruyacağam və dəstəkləyəcəyəm. Onlar mənim qürurum, sevgim və həyatımın ən dəyərli hissəsidir.
            </p>
          </div>
          <div>
            {aboutVideo ? (
              (aboutVideo.includes('youtube') || aboutVideo.includes('youtu.be')) ? (
                <div style={{ position: 'relative', paddingTop: '56.25%', borderRadius: 8, overflow: 'hidden' }}>
                  <iframe
                    src={toYouTubeEmbed(aboutVideo) || aboutVideo}
                    title="About video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                  />
                </div>
              ) : (
                <video
                  src={aboutVideo}
                  controls
                  style={{ width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover' }}
                  poster="https://preview.colorlib.com/theme/vegefoods/images/about.jpg"
                />
              )
            ) : (
              <img src="https://preview.colorlib.com/theme/vegefoods/images/about.jpg" alt="About" style={{ width: '100%', height: 'auto', borderRadius: 8, objectFit: 'cover' }} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
