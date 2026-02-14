import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import productService from '../../services/productService';
import { productSchema } from '../../validation/productSchema';
import Input from '../../components/common/Input';

const Products = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);

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
          setEditingId(null);
        } else {
          await productService.create(payload);
        }
        await load();
        resetForm();
      } catch (error) {
        console.error("Error saving product:", error);
      }
    },
  });

  const handleEdit = (product) => {
    setEditingId(product.id);
    formik.setValues({
      name: product.name,
      category: product.category,
      price: product.price,
      oldPrice: product.oldPrice || '',
      discount: product.discount || '',
      image: product.image
    });
  };

  const handleCancel = () => {
    setEditingId(null);
    formik.resetForm();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await productService.delete(id);
      await load();
    }
  };

  return (
    <div>
      <h1 style={{ marginBottom: 20 }}>Admin Products Management</h1>

      <div style={{ background: '#fff', padding: 20, borderRadius: 8, boxShadow: '0 2px 5px rgba(0,0,0,0.1)', marginBottom: 30 }}>
        <h3 style={{ marginBottom: 15 }}>{editingId ? 'Edit Product' : 'Add New Product'}</h3>
        <form onSubmit={formik.handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 15 }}>
          <Input
            label="Product Name"
            name="name"
            placeholder="Enter product name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && formik.errors.name}
          />
          
          <div className="input-group">
            <label>Category</label>
            <select
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: 4, border: '1px solid #ddd' }}
            >
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Juice">Juice</option>
              <option value="Dried">Dried</option>
            </select>
            {formik.touched.category && formik.errors.category && (
              <span className="error-message" style={{ color: 'red', fontSize: 12 }}>{formik.errors.category}</span>
            )}
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

          <Input
            label="Image URL"
            name="image"
            placeholder="http://example.com/image.jpg"
            value={formik.values.image}
            onChange={formik.handleChange}
            error={formik.touched.image && formik.errors.image}
          />

          <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 10, marginTop: 10 }}>
            <button className="btn btn-primary" type="submit">
              {editingId ? 'Update Product' : 'Add Product'}
            </button>
            {editingId && (
              <button className="btn" type="button" onClick={handleCancel} style={{ background: '#f8f9fa', border: '1px solid #ddd' }}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {loading ? <p>Loading...</p> : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <thead style={{ background: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
              <tr>
                <th style={{ padding: 12, textAlign: 'left' }}>ID</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Image</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Name</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Category</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Price</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(p => (
                <tr key={p.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: 12 }}>{p.id}</td>
                  <td style={{ padding: 12 }}>
                    <img src={p.image} alt={p.name} style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: 4 }} />
                  </td>
                  <td style={{ padding: 12 }}>{p.name}</td>
                  <td style={{ padding: 12 }}>{p.category}</td>
                  <td style={{ padding: 12 }}>${p.price}</td>
                  <td style={{ padding: 12 }}>
                    <button 
                      className="btn btn-primary" 
                      onClick={() => handleEdit(p)} 
                      style={{ marginRight: 8, padding: '5px 10px', fontSize: 12 }}
                    >
                      Edit
                    </button>
                    <button 
                      className="btn" 
                      onClick={() => handleDelete(p.id)}
                      style={{ padding: '5px 10px', fontSize: 12, background: '#dc3545', color: '#fff', border: 'none' }}
                    >
                      Delete
                    </button>
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
