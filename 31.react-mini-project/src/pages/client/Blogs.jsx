import { useEffect, useMemo, useState } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import blogService from '../../services/blogService';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');
  const [sort] = useState('date_desc');
  const [debounced, setDebounced] = useState('');
  const [category, setCategory] = useState('All');
  
  useEffect(() => {
    const run = async () => {
      try {
        const data = await blogService.getAll();
        setBlogs(data);
      } catch {
        setBlogs([
          { id: 1, title: 'Even the all-powerful Pointing has no control about the blind texts', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', date: 'July 20, 2019', position: 'Vegetables', image: 'https://preview.colorlib.com/theme/vegefoods/images/image_1.jpg' },
          { id: 2, title: 'Even the all-powerful Pointing has no control about the blind texts', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', date: 'July 20, 2019', position: 'Fruits', image: 'https://preview.colorlib.com/theme/vegefoods/images/image_2.jpg' },
          { id: 3, title: 'Even the all-powerful Pointing has no control about the blind texts', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', date: 'July 20, 2019', position: 'Juice', image: 'https://preview.colorlib.com/theme/vegefoods/images/image_3.jpg' },
        ]);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  useEffect(() => {
    const id = setTimeout(()=>setDebounced(q), 300);
    return ()=>clearTimeout(id);
  }, [q]);

  const categories = useMemo(() => {
    const set = new Set(blogs.map(b => b.position).filter(Boolean));
    return ['All', ...Array.from(set)];
  }, [blogs]);

  const counts = useMemo(() => {
    return blogs.reduce((acc, b) => {
      if (b.position) acc[b.position] = (acc[b.position] || 0) + 1;
      return acc;
    }, {});
  }, [blogs]);

  const list = useMemo(()=>{
    return blogs
      .filter(b => b.title.toLowerCase().includes(debounced.toLowerCase()))
      .filter(b => category === 'All' ? true : (b.position === category))
      .sort((a, b) => {
        switch (sort) {
          case 'title_asc': return a.title.localeCompare(b.title);
          case 'title_desc': return b.title.localeCompare(a.title);
          case 'date_asc': return new Date(a.date) - new Date(b.date);
          case 'date_desc': return new Date(b.date) - new Date(a.date);
          default: return 0;
        }
      });
  }, [blogs, debounced, sort, category]);

  return (
    <div className={styles["no-section-pad"]}>
      <div className={`${styles["product-banner"]} ${styles["banner-blog"]}`}>
        <div className="container">
          <span className={styles["product-breadcrumb"]}>HOME BLOG</span>
          <h2>BLOG</h2>
        </div>
      </div>
      <div className="container">
        {loading ? <p>Loading...</p> : (
          <div className={styles["blog-layout"]}>
            <div className={styles["blog-list"]}>
              {list.map(b => (
                <article key={b.id} className={styles["blog-item"]}>
                  <div className={styles["blog-thumb"]}>
                    <img src={b.image || 'https://preview.colorlib.com/theme/vegefoods/images/image_1.jpg'} alt={b.title} />
                  </div>
                  <div className={styles["blog-body"]}>
                    <div className={styles["blog-meta"]}>
                      <span className={styles["date"]}>{b.date}</span>
                      <span className={styles["meta-dot"]}>Admin</span>
                      <span className={styles["meta-dot"]}>3</span>
                    </div>
                    <h3 className={styles["blog-title"]}>{b.title}</h3>
                    <p className={styles["blog-desc"]}>{b.description}</p>
                    <Link to={`/blog/${b.id}`} className={styles["read-more"]}>Read more</Link>
                  </div>
                </article>
              ))}
              {list.length === 0 && <p>No posts found.</p>}
            </div>
            <aside className={styles["blog-sidebar"]}>
              <div className={styles["search-box"]}>
                <input
                  placeholder="Search..."
                  value={q}
                  onChange={(e)=>setQ(e.target.value)}
                />
              </div>
              <div className={styles["categories"]}>
                <h4>Categories</h4>
                <ul className={styles["cat-list"]}>
                  {categories.map(cat => (
                    <li key={cat}>
                      <button
                        className={`${styles["cat-btn"]} ${category === cat ? styles["active"] : ""}`}
                        onClick={()=>setCategory(cat)}
                      >
                        {cat}
                      </button>
                      <span className={styles["cat-count"]}>
                        {cat === 'All' ? blogs.length : (counts[cat] || 0)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles["tag-cloud"]}>
                <h4>Tag Cloud</h4>
                <div className={styles["tags"]}>
                  {["FRUITS","TOMATO","MANGO","APPLE","CARROTS","ORANGE","PEPPER","EGGPLANT"].map(t=>(
                    <button key={t} className={styles["tag"]}>{t}</button>
                  ))}
                </div>
              </div>
              <div className={styles["paragraph"]}>
                <h4>Paragraph</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
                </p>
              </div>
              <div className={styles["recent-blog"]}>
                <h4>Recent Blog</h4>
                {[...blogs].sort((a,b)=> new Date(b.date) - new Date(a.date)).slice(0,3).map(rb => (
                  <div key={rb.id} className={styles["recent-item"]}>
                    <img src={rb.image || 'https://preview.colorlib.com/theme/vegefoods/images/image_1.jpg'} alt={rb.title} />
                    <div>
                      <Link to={`/blog/${rb.id}`} className={styles["recent-title"]}>{rb.title}</Link>
                      <div className={styles["recent-meta"]}>
                        <span>{rb.date}</span>
                        <span>Admin</span>
                        <span>19</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
