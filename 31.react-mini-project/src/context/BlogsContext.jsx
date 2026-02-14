import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { initDb, readBlogs, saveBlogs, uid } from '../services/localDb';

const BlogsContext = createContext(null);

export function BlogsProvider({ children }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    initDb();
    setBlogs(readBlogs());
  }, []);

  const create = (item) => {
    const newItem = { id: uid('b'), ...item };
    const next = [...blogs, newItem];
    setBlogs(next);
    saveBlogs(next);
  };
  const update = (id, patch) => {
    const next = blogs.map((b) => (b.id === id ? { ...b, ...patch } : b));
    setBlogs(next);
    saveBlogs(next);
  };
  const remove = (id) => {
    const next = blogs.filter((b) => b.id !== id);
    setBlogs(next);
    saveBlogs(next);
  };

  const value = useMemo(() => ({ blogs, create, update, remove }), [blogs]);
  return <BlogsContext.Provider value={value}>{children}</BlogsContext.Provider>;
}

export function useBlogs() {
  return useContext(BlogsContext);
}

