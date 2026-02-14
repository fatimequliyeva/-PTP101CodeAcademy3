import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Home.module.css';
import blogService from '../../services/blogService';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const run = async () => {
      try {
        const data = await blogService.getById(id);
        setBlog(data);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [id]);
  
  return (
    <div className="section">
      <div className={styles["product-banner"]}>
        <div className="container">
          <span className={styles["product-breadcrumb"]}>HOME BLOG</span>
          <h2>BLOG</h2>
        </div>
      </div>
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : !blog ? (
          <p>Blog not found</p>
        ) : (
          <article className={styles["blog-detail"]}>
            <div className={styles["detail-image"]}>
              <img src={blog.image || 'https://preview.colorlib.com/theme/vegefoods/images/image_1.jpg'} alt={blog.title} />
            </div>
            <div className={styles["detail-body"]}>
              <div className={styles["detail-meta"]}>
                <span>{blog.date}</span>
                <span>Admin</span>
                <span>3</span>
              </div>
              <h2 className={styles["detail-title"]}>{blog.title}</h2>
              <p className={styles["detail-content"]}>
                {blog.description}
              </p>
              <Link to="/blog" className={styles["read-more"]}>Back to Blog</Link>
            </div>
          </article>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
