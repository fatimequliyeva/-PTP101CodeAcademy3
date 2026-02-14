import { useBlogs } from '../../context/BlogsContext';

export default function Blogs() {
  const { blogs } = useBlogs();
  return (
    <div style={{padding:16,maxWidth:900,margin:'0 auto'}}>
      <h2>Blog</h2>
      <div style={{display:'grid',gap:16}}>
        {blogs.map(b => (
          <article key={b.id} style={{border:'1px solid #eee',borderRadius:8,padding:16}}>
            <h3 style={{margin:'0 0 8px'}}>{b.title}</h3>
            <p style={{margin:0,color:'#555'}}>{b.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
