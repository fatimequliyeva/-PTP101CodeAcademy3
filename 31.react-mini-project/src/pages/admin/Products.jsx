import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import productService from '../../services/productService';
import { productSchema } from '../../validation/productSchema';
import Input from '../../components/common/Input';
import styles from './Products.module.css';

const Products = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const load = async () => {
    try {
      const data = await productService.getAll();
      setItems(data);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
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
    initialValues: {
      name: '',
      category: 'Vegetables',
      price: '',
      oldPrice: '',
      discount: '',
      image: ''
    },
    validationSchema: productSchema,
    onSubmit: async (values, { resetForm }) => {
      const payload = {
        ...values,
        price: Number(values.price),
        oldPrice: values.oldPrice ? Number(values.oldPrice) : 0,
        discount: values.discount ? Number(values.discount) : 0
      };

      try {
        if (editingId) {
          await productService.update(editingId, payload);
        } else {
          await productService.create(payload);
        }
        await load();
        resetForm();
        setImagePreview('');
        setFormOpen(false);
        setEditingId(null);
      } catch (error) {
        console.error("Error saving product:", error);
      }
    },
  });

  const openCreate = () => {
    setEditingId(null);
    formik.resetForm();
    setImagePreview('');
    setFormOpen(true);
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    formik.setValues({
      name: product.name,
      category: product.category,
      price: product.price,
      oldPrice: product.oldPrice || '',
      discount: product.discount || '',
      image: product.image || ''
    });
    setImagePreview(product.image || '');
    setFormOpen(true);
  };

  const handleCancel = () => {
    setEditingId(null);
    formik.resetForm();
    setImagePreview('');
    setFormOpen(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await productService.delete(id);
      await load();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20}}>
        <h1 className={styles.pageTitle}>Admin Products</h1>
        {!formOpen && (
          <button className="btn btn-primary" onClick={openCreate}>Add Product</button>
        )}
      </div>

      {formOpen && (
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>{editingId ? 'Edit Product' : 'Add New Product'}</h3>
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <Input
              label="Product Name"
              name="name"
              placeholder="Enter product name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && formik.errors.name}
            />

            <div className={styles.inputGroup}>
              <label className={styles.label}>Category</label>
              <select
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                className={styles.select}
              >
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Juice">Juice</option>
                <option value="Dried">Dried</option>
              </select>
            </div>

            <Input
              label="Price"
              type="number"
              name="price"
              placeholder="0.00"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && formik.errors.price}
            />

            <Input
              label="Old Price (Optional)"
              type="number"
              name="oldPrice"
              placeholder="0.00"
              value={formik.values.oldPrice}
              onChange={formik.handleChange}
              error={formik.touched.oldPrice && formik.errors.oldPrice}
            />

            <Input
              label="Discount % (Optional)"
              type="number"
              name="discount"
              placeholder="0"
              value={formik.values.discount}
              onChange={formik.handleChange}
              error={formik.touched.discount && formik.errors.discount}
            />

            <div className={styles.inputGroup}>
              <label className={styles.label}>Product Image</label>
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

            <div className={styles.actions}>
              <button className="btn btn-primary" type="submit">
                {editingId ? 'Update Product' : 'Add Product'}
              </button>
              <button className={`btn ${styles.btnCancel}`} type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? <p>Loading...</p> : (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(p => (
                <tr key={p.id}>
                  <td>
                    <img 
                      src={p.image || 'https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg'} 
                      alt={p.name} 
                      className={styles.thumb}
                      onError={(e) => { e.currentTarget.src = 'https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg'; }}
                    />
                  </td>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>${Number(p.price).toFixed(2)}</td>
                  <td>{p.discount > 0 ? `${p.discount}%` : '—'}</td>
                  <td>
                    <div style={{display:'flex', gap:8}}>
                      <button className="btn btn-primary" onClick={() => handleEdit(p)}>Edit</button>
                      <button className={`btn ${styles.btnDanger}`} onClick={() => handleDelete(p.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Products;
