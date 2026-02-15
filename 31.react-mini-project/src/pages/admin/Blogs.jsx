import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import blogService from '../../services/blogService';
import { blogSchema } from '../../validation/blogSchema';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('date_desc');
  const [imagePreview, setImagePreview] = useState('');
  const load = async () => {
    const data = await blogService.getAll();
    setBlogs(data);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const compressImage = (file, maxWidth = 20, quality = 0.05) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ratio = maxWidth / img.width;
          canvas.width = maxWidth;
          canvas.height = img.height * ratio;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const compressed = await compressImage(file);
      setImagePreview(compressed);
      formik.setFieldValue('image', compressed);
    }
  };

  const formik = useFormik({
    initialValues: { title: '', description: '', date: '', position: '', image: '' },
    validationSchema: blogSchema,
    onSubmit: async (values, { resetForm }) => {
      if (editing) {
        await blogService.update(editing.id, values);
      } else {
        await blogService.create(values);
      }
      resetForm();
      setImagePreview('');
      setModalOpen(false);
      setEditing(null);
      await load();
    }
  });

  const openCreate = () => {
    setEditing(null);
    formik.resetForm();
    setImagePreview('');
    setModalOpen(true);
  };

  const openEdit = (item) => {
    setEditing(item);
    formik.setValues({
      title: item.title || '',
      description: item.description || '',
      date: item.date || '',
      position: item.position || '',
      image: item.image || ''
    });
    setImagePreview(item.image || '');
    setModalOpen(true);
  };

  const remove = async (id) => {
    await blogService.delete(id);
    await load();
  };

  const filtered = blogs
    .filter(b => b.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      switch (sort) {
        case 'title_asc': return a.title.localeCompare(b.title);
        case 'title_desc': return b.title.localeCompare(a.title);
        case 'date_asc': return new Date(a.date) - new Date(b.date);
        case 'date_desc': return new Date(b.date) - new Date(a.date);
        default: return 0;
      }
    });

  return (
    <div className="container section">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20}}>
        <h1>Admin Blogs</h1>
        <Button className="btn-primary" onClick={openCreate}>Add Blog</Button>
      </div>

      <div style={{display:'flex', gap:12, marginBottom:20}}>
        <input
          placeholder="Search by title..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          style={{padding:'8px 10px', border:'1px solid #ddd', borderRadius:6}}
        />
        <select value={sort} onChange={(e)=>setSort(e.target.value)} style={{padding:'8px 10px', border:'1px solid #ddd', borderRadius:6}}>
          <option value="date_desc">Date ↓</option>
          <option value="date_asc">Date ↑</option>
          <option value="title_asc">Title A–Z</option>
          <option value="title_desc">Title Z–A</option>
        </select>
      </div>

      {loading ? <p>Loading...</p> : (
        <table style={{width:'100%', borderCollapse:'collapse'}}>
          <thead>
            <tr>
              <th style={{textAlign:'left', padding:10, borderBottom:'1px solid #eee'}}>Image</th>
              <th style={{textAlign:'left', padding:10, borderBottom:'1px solid #eee'}}>Title</th>
              <th style={{textAlign:'left', padding:10, borderBottom:'1px solid #eee'}}>Date</th>
              <th style={{textAlign:'left', padding:10, borderBottom:'1px solid #eee'}}>Position</th>
              <th style={{textAlign:'left', padding:10, borderBottom:'1px solid #eee'}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(b => (
              <tr key={b.id}>
                <td style={{padding:10, borderBottom:'1px solid #f5f5f5'}}>
                  <img 
                    src={b.image || 'https://preview.colorlib.com/theme/vegefoods/images/image_1.jpg'} 
                    alt={b.title} 
                    style={{width:60, height:60, objectFit:'cover', borderRadius:6}}
                  />
                </td>
                <td style={{padding:10, borderBottom:'1px solid #f5f5f5'}}>{b.title}</td>
                <td style={{padding:10, borderBottom:'1px solid #f5f5f5'}}>{b.date}</td>
                <td style={{padding:10, borderBottom:'1px solid #f5f5f5'}}>{b.position}</td>
                <td style={{padding:10, borderBottom:'1px solid #f5f5f5', display:'flex', gap:8}}>
                  <Button onClick={()=>openEdit(b)}>Edit</Button>
                  <Button className="btn-delete" onClick={()=>remove(b.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Modal isOpen={modalOpen} onClose={()=>setModalOpen(false)} title={editing ? 'Edit Blog' : 'Add Blog'}>
        <form onSubmit={formik.handleSubmit}>
          <Input label="Title" name="title" value={formik.values.title} onChange={formik.handleChange} error={formik.touched.title && formik.errors.title}/>
          <Input label="Description" name="description" value={formik.values.description} onChange={formik.handleChange} error={formik.touched.description && formik.errors.description}/>
          <Input label="Date" type="date" name="date" value={formik.values.date} onChange={formik.handleChange} error={formik.touched.date && formik.errors.date}/>
          <Input label="Position" name="position" value={formik.values.position} onChange={formik.handleChange}/>
          
          <div className="input-group">
            <label>Blog Image</label>
            <label 
              style={{
                display:'inline-block', 
                padding:'10px 20px', 
                background:'#82ae46', 
                color:'#fff', 
                borderRadius:6, 
                cursor:'pointer',
                marginTop:5,
                fontSize:14
              }}
            >
              Choose Image
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange}
                style={{display:'none'}} 
              />
            </label>
            {imagePreview && (
              <div style={{marginTop:10}}>
                <img src={imagePreview} alt="Preview" style={{width:120, height:80, objectFit:'cover', borderRadius:6, border:'1px solid #ddd'}} />
              </div>
            )}
          </div>

          <div style={{display:'flex', justifyContent:'flex-end', gap:10, marginTop:10}}>
            <Button type="button" className="btn-cancel" onClick={()=>setModalOpen(false)}>Cancel</Button>
            <Button type="submit" className="btn-save">{editing ? 'Save' : 'Create'}</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Blogs;
