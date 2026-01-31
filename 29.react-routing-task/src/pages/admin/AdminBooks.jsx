import { useEffect, useState } from "react"
import axios from "axios"
import { FaEdit, FaTrash } from "react-icons/fa"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

// Validasiya sxemi
const BookSchema = Yup.object().shape({
  title: Yup.string().trim().required("Başlıq mütləqdir"),
  author: Yup.string().trim().required("Müəllif mütləqdir"),
  price: Yup.number().required("Qiymət mütləqdir").positive("Qiymət müsbət olmalıdır"),
  description: Yup.string().trim().required("Təsvir mütləqdir"),
  stock: Yup.number().required("Stok mütləqdir").min(0, "Stok mənfi ola bilməz"),
  genre: Yup.string().trim().required("Janr mütləqdir"),
  language: Yup.string().trim().required("Dil mütləqdir"),
  coverImageURL: Yup.string().trim().url("Düzgün URL daxil edin").required("Şəkil linki mütləqdir"),
  rating: Yup.number().required("Rating mütləqdir").min(0).max(5),
  sold: Yup.number().required("Satılan sayı mütləqdir").min(0)
})

function AdminBooks() {
  const [books, setBooks] = useState([])
  const [editingBook, setEditingBook] = useState(null)
  const [status, setStatus] = useState("")

  const fetchBooks = () => {
    axios.get("https://book-store-api-liard-three.vercel.app/books")
      .then(res => setBooks(res.data))
      .catch(err => console.error("Kitabları yükləmək mümkün olmadı:", err))
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const handleDelete = async (id) => {
    setStatus("yuklenir")
    try {
      await axios.delete(`https://book-store-api-liard-three.vercel.app/books/${id}`)
      setStatus("ugurlu")
    } catch (err) {
      console.error(err)
      setStatus("xeta")
    } finally {
      fetchBooks()
      setTimeout(() => setStatus(""), 2000)
    }
  }

  const handleEditClick = (book) => {
    setEditingBook(book)
  }

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Admin Kitablar</h1>

      {/* Status mesajları */}
      {status === "yuklenir" && <p className="text-yellow-600 mb-4">Əməliyyat icra olunur...</p>}
      {status === "ugurlu" && <p className="text-green-600 mb-4">Əməliyyat uğurla tamamlandı ✅</p>}
      {status === "xeta" && <p className="text-red-600 mb-4">Xəta baş verdi ❌</p>}

      {/* Edit formu */}
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
                Object.entries(values).map(([key, val]) =>
                  typeof val === "string" ? [key, val.trim()] : [key, val]
                )
              )
              await axios.put(`https://book-store-api-liard-three.vercel.app/books/${editingBook.id}`, trimmedValues)
              setStatus("ugurlu")
              setEditingBook(null)
              fetchBooks()
            } catch (err) {
              console.error(err)
              setStatus("xeta")
            } finally {
              setSubmitting(false)
              setTimeout(() => setStatus(""), 2000)
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="mb-6 p-4 bg-white shadow rounded max-w-md">
              <h2 className="text-xl font-semibold mb-4">Kitabı Yenilə</h2>
              {Object.keys(BookSchema.fields).map((field) => (
                <div key={field}>
                  <label className="block text-gray-700 mb-2 capitalize">{field}</label>
                  <Field
                    type="text"
                    name={field}
                    className="w-full border px-3 py-2 mb-3 rounded"
                  />
                  <ErrorMessage name={field} component="div" className="text-red-500 text-sm mt-1" />
                </div>
              ))}
              <button type="submit" disabled={isSubmitting} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                Yenilə
              </button>
            </Form>
          )}
        </Formik>
      )}

      {/* Cədvəl */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Şəkil</th>
            <th className="border border-gray-300 px-4 py-2">Başlıq</th>
            <th className="border border-gray-300 px-4 py-2">Müəllif</th>
            <th className="border border-gray-300 px-4 py-2">Qiymət</th>
            <th className="border border-gray-300 px-4 py-2">Stock</th>
            <th className="border border-gray-300 px-4 py-2">Genre</th>
            <th className="border border-gray-300 px-4 py-2">Dil</th>
            <th className="border border-gray-300 px-4 py-2">Rating</th>
            <th className="border border-gray-300 px-4 py-2">Sold</th>
            <th className="border border-gray-300 px-4 py-2">Əməliyyatlar</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">
                <img src={book.coverImageURL} alt={book.title} className="w-16 h-20 object-cover rounded" />
              </td>
              <td className="border border-gray-300 px-4 py-2">{book.title}</td>
              <td className="border border-gray-300 px-4 py-2">{book.author}</td>
              <td className="border border-gray-300 px-4 py-2">${book.price}</td>
              <td className="border border-gray-300 px-4 py-2">{book.stock}</td>
              <td className="border border-gray-300 px-4 py-2">{book.genre}</td>
              <td className="border border-gray-300 px-4 py-2">{book.language}</td>
              <td className="border border-gray-300 px-4 py-2">{book.rating}</td>
              <td className="border border-gray-300 px-4 py-2">{book.sold}</td>
              <td className="border border-gray-300 px-4 py-2 text-center space-x-4">
                <button 
                  onClick={() => handleEditClick(book)} 
                  className="text-yellow-500 hover:text-yellow-700"
                >
                  <FaEdit size={20} />
                </button>
                <button 
                  onClick={() => handleDelete(book.id)} 
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash size={20} />
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
