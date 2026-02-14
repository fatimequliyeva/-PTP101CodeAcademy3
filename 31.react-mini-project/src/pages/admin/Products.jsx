import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import productService from '../../services/productService';
import { productSchema } from '../../validation/productSchema';
import Input from '../../components/common/Input';
import styles from './Products.module.css';

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
    <div className={styles.wrapper}>
      <h1 className={styles.pageTitle}>Admin Products Management</h1>

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
            {formik.touched.category && formik.errors.category && (
              <span className={styles.error}>{formik.errors.category}</span>
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

          <div className={styles.actions}>
            <button className="btn btn-primary" type="submit">
              {editingId ? 'Update Product' : 'Add Product'}
            </button>
            {editingId && (
              <button className={`btn ${styles.btnCancel}`} type="button" onClick={handleCancel}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {loading ? <p>Loading...</p> : (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>
                    <img src={p.image} alt={p.name} className={styles.thumb} />
                  </td>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>${p.price}</td>
                  <td>
                    <button 
                      className="btn btn-primary" 
                      onClick={() => handleEdit(p)}
                      style={{ marginRight: 8 }}
                    >
                      Edit
                    </button>
                    <button 
                      className={`btn ${styles.btnDanger}`} 
                      onClick={() => handleDelete(p.id)}
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
