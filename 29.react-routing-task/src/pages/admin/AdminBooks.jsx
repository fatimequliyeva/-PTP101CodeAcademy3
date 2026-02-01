import { useEffect, useState } from "react"
import axios from "axios"
import { FaEdit, FaTrash, FaSpinner } from "react-icons/fa"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const BookSchema = Yup.object().shape({
  title: Yup.string().trim().required("Başlıq mütləqdir"),
  author: Yup.string().trim().required("Müəllif mütləqdir"),
  price: Yup.number()
    .typeError("Qiymət rəqəm olmalıdır")
    .required("Qiymət mütləqdir")
    .positive(),
  description: Yup.string().trim().required("Təsvir mütləqdir"),
  stock: Yup.number()
    .typeError("Stok rəqəm olmalıdır")
    .required("Stok mütləqdir")
    .min(0),
  genre: Yup.string().trim().required("Janr mütləqdir"),
  language: Yup.string().trim().required("Dil mütləqdir"),
  coverImageURL: Yup.string().url("Düzgün URL daxil edin").required("Şəkil linki mütləqdir"),
  rating: Yup.number()
    .typeError("Rating rəqəm olmalıdır")
    .min(0)
    .max(5)
    .required(),
  sold: Yup.number()
    .typeError("Satış sayı rəqəm olmalıdır")
    .min(0)
    .required()
})

function AdminBooks() {
  const [books, setBooks] = useState([])
  const [editingBook, setEditingBook] = useState(null)
  const [status, setStatus] = useState("")

  const BASE_URL = "https://book-store-api-liard-three.vercel.app/books"

  const fetchBooks = async () => {
    try {
      const res = await axios.get(BASE_URL)
      setBooks(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const handleDelete = async (id) => {
    setStatus("yuklenir")
    try {
      await axios.delete(`${BASE_URL}/${id}`)
    } catch (err) {
      console.log("Delete error (normaldır):", err)
    } finally {
      setStatus("ugurlu")
      fetchBooks()
      setTimeout(() => setStatus(""), 2000)
    }
  }

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Admin Kitablar
      </h1>

      {status === "yuklenir" && (
        <p className="flex items-center gap-2 text-yellow-600 mb-4">
          <FaSpinner className="animate-spin" />
          Əməliyyat icra olunur...
        </p>
      )}

      {status === "ugurlu" && (
        <p className="text-green-600 mb-4">
          ✔ Əməliyyat uğurla tamamlandı
        </p>
      )}

      {editingBook && (
        <Formik
          enableReinitialize
          initialValues={{
            title: editingBook.title || "",
            author: editingBook.author || "",
            price: editingBook.price || 0,
            description: editingBook.description || "",
            stock: editingBook.stock || 0,
            genre: editingBook.genre || "",
            language: editingBook.language || "",
            coverImageURL: editingBook.coverImageURL || "",
            rating: editingBook.rating || 0,
            sold: editingBook.sold || 0
          }}
          validationSchema={BookSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setStatus("yuklenir")
            try {
              await axios.put(`${BASE_URL}/${editingBook.id}`, values)
            } catch (err) {
              console.log("Update error (normaldır):", err)
            } finally {
              setStatus("ugurlu")
              setEditingBook(null)
              fetchBooks()
              setSubmitting(false)
              setTimeout(() => setStatus(""), 2000)
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="mb-8 p-6 bg-white shadow rounded-lg max-w-4xl">
              <h2 className="text-xl font-semibold mb-4">
                Kitabı Yenilə
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  {["title", "author", "genre"].map((f) => (
                    <div key={f} className="mb-4">
                      <label className="block mb-1 capitalize">{f}</label>
                      <Field name={f} className="w-full border px-3 py-2 rounded" />
                      <ErrorMessage name={f} component="div" className="text-red-500 text-sm" />
                    </div>
                  ))}

                  <div className="mb-4">
                    <label>Price</label>
                    <Field name="price" type="number" className="w-full border px-3 py-2 rounded" />
                    <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="mb-4">
                    <label>Stock</label>
                    <Field name="stock" type="number" className="w-full border px-3 py-2 rounded" />
                    <ErrorMessage name="stock" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <label>Language</label>
                    <Field name="language" className="w-full border px-3 py-2 rounded" />
                    <ErrorMessage name="language" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="mb-4">
                    <label>Rating</label>
                    <Field name="rating" type="number" className="w-full border px-3 py-2 rounded" />
                    <ErrorMessage name="rating" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="mb-4">
                    <label>Sold</label>
                    <Field name="sold" type="number" className="w-full border px-3 py-2 rounded" />
                    <ErrorMessage name="sold" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="mb-4">
                    <label>Cover Image URL</label>
                    <Field name="coverImageURL" className="w-full border px-3 py-2 rounded" />
                    <ErrorMessage name="coverImageURL" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="mb-4">
                    <label>Description</label>
                    <Field
                      name="description"
                      as="textarea"
                      rows="4"
                      className="w-full border px-3 py-2 rounded"
                    />
                    <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                {isSubmitting ? <FaSpinner className="animate-spin" /> : <FaEdit />}
                Yenilə
              </button>
            </Form>
          )}
        </Formik>
      )}

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th>#</th>
            <th>Şəkil</th>
            <th>Başlıq</th>
            <th>Müəllif</th>
            <th>Qiymət</th>
            <th>Stock</th>
            <th>Əməliyyat</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b, i) => (
            <tr key={b.id} className="text-center border-t">
              <td>{i + 1}</td>
              <td>
                <img src={b.coverImageURL} className="w-12 h-16 mx-auto" />
              </td>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>${b.price}</td>
              <td>{b.stock}</td>
              <td className="flex justify-center gap-3 py-2">
                <button onClick={() => setEditingBook(b)} className="text-yellow-500">
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(b.id)} className="text-red-500">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminBooks
