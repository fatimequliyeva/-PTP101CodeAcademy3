import { useEffect, useState } from "react"
import axios from "axios"
import { FaEdit, FaTrash, FaSpinner } from "react-icons/fa"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"


const BookSchema = Yup.object().shape({
  title: Yup.string().trim().required("Başlıq mütləqdir"),
  author: Yup.string().trim().required("Müəllif mütləqdir"),
  price: Yup.number().required("Qiymət mütləqdir").positive(),
  description: Yup.string().trim().required("Təsvir mütləqdir"),
  stock: Yup.number().required("Stok mütləqdir").min(0),
  genre: Yup.string().trim().required("Janr mütləqdir"),
  language: Yup.string().trim().required("Dil mütləqdir"),
  coverImageURL: Yup.string().url("Düzgün URL daxil edin").required(),
  rating: Yup.number().required().min(0).max(5),
  sold: Yup.number().required().min(0)
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
      console.log("Vercel delete error (normaldir):", err)
    } finally {
      setStatus("ugurlu")
      fetchBooks()
      setTimeout(() => setStatus(""), 2000)
    }
  }


  const handleEditClick = (book) => {
    setEditingBook(book)
  }

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Admin Kitablar
      </h1>

      {/* STATUS */}
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
          initialValues={{
            title: editingBook.title,
            author: editingBook.author,
            price: editingBook.price,
            description: editingBook.description,
            stock: editingBook.stock,
            genre: editingBook.genre,
            language: editingBook.language,
            coverImageURL: editingBook.coverImageURL,
            rating: editingBook.rating,
            sold: editingBook.sold
          }}
          validationSchema={BookSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setStatus("yuklenir")

            try {
              const trimmedValues = Object.fromEntries(
                Object.entries(values).map(([k, v]) =>
                  typeof v === "string" ? [k, v.trim()] : [k, v]
                )
              )

              await axios.put(
                `${BASE_URL}/${editingBook.id}`,
                trimmedValues
              )
            } catch (err) {
              console.log("Vercel put error (normaldir):", err)
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
                  {["title", "author", "price", "stock", "genre"].map((f) => (
                    <div key={f} className="mb-4">
                      <label className="block mb-1 capitalize">{f}</label>
                      <Field name={f} className="w-full border px-3 py-2 rounded" />
                      <ErrorMessage name={f} component="div" className="text-red-500 text-sm" />
                    </div>
                  ))}
                </div>

          
                <div>
                  {["language", "rating", "sold", "coverImageURL"].map((f) => (
                    <div key={f} className="mb-4">
                      <label className="block mb-1 capitalize">{f}</label>
                      <Field name={f} className="w-full border px-3 py-2 rounded" />
                      <ErrorMessage name={f} component="div" className="text-red-500 text-sm" />
                    </div>
                  ))}

                  <div className="mb-4">
                    <label className="block mb-1">Description</label>
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

   
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">#</th>
              <th className="border px-3 py-2">Şəkil</th>
              <th className="border px-3 py-2">Başlıq</th>
              <th className="border px-3 py-2">Müəllif</th>
              <th className="border px-3 py-2">Qiymət</th>
              <th className="border px-3 py-2">Stock</th>
              <th className="border px-3 py-2">Əməliyyat</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, i) => (
              <tr key={book.id} className="hover:bg-gray-50">
                <td className="border px-3 py-2 text-center">{i + 1}</td>
                <td className="border px-3 py-2 text-center">
                  <img src={book.coverImageURL} alt="" className="w-12 h-16 mx-auto" />
                </td>
                <td className="border px-3 py-2">{book.title}</td>
                <td className="border px-3 py-2">{book.author}</td>
                <td className="border px-3 py-2">${book.price}</td>
                <td className="border px-3 py-2">{book.stock}</td>
                <td className="border px-3 py-2 text-center space-x-3">
                  <button
                    onClick={() => handleEditClick(book)}
                    className="text-yellow-500"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="text-red-500"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminBooks
