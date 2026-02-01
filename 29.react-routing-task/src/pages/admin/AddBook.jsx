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
  const [searchTerm, setSearchTerm] = useState("")
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

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="mt-10 px-4">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">
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

      {/* SEARCH */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between">
        <input
          type="text"
          placeholder="Kitab adı və ya müəllif axtar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:max-w-md px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500"
        />
        <span className="text-gray-600 text-sm self-center">
          Nəticə sayı: {filteredBooks.length}
        </span>
      </div>

      {/* EDIT FORM */}
      {editingBook && (
        <Formik
          initialValues={editingBook}
          validationSchema={BookSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setStatus("yuklenir")
            try {
              await axios.put(`${BASE_URL}/${editingBook.id}`, values)
            } catch (err) {
              console.log("Put error (normaldır):", err)
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
            <Form className="mb-8 p-6 bg-white shadow-xl rounded-2xl max-w-4xl">
              <h2 className="text-xl font-semibold mb-4">Kitabı Yenilə</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {Object.keys(BookSchema.fields).map((f) => (
                  <div key={f}>
                    <label className="block mb-1 capitalize">{f}</label>
                    <Field
                      name={f}
                      as={f === "description" ? "textarea" : "input"}
                      rows={f === "description" ? 3 : undefined}
                      className="w-full border px-3 py-2 rounded"
                    />
                    <ErrorMessage name={f} component="div" className="text-red-500 text-sm" />
                  </div>
                ))}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-5 flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                {isSubmitting ? <FaSpinner className="animate-spin" /> : <FaEdit />}
                Yenilə
              </button>
            </Form>
          )}
        </Formik>
      )}

      {/* TABLE */}
      <div className="overflow-x-auto bg-white shadow-xl rounded-2xl">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Şəkil</th>
              <th className="p-3">Başlıq</th>
              <th className="p-3">Müəllif</th>
              <th className="p-3">Qiymət</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Əməliyyat</th>
            </tr>
          </thead>

          <tbody>
            {filteredBooks.map((book, i) => (
              <tr key={book.id} className="border-t text-center hover:bg-gray-50">
                <td className="p-3">{i + 1}</td>
                <td className="p-3">
                  <img src={book.coverImageURL} className="w-12 h-16 mx-auto rounded" />
                </td>
                <td className="p-3">{book.title}</td>
                <td className="p-3">{book.author}</td>
                <td className="p-3">${book.price}</td>
                <td className="p-3">{book.stock}</td>
                <td className="p-3 flex justify-center gap-4">
                  <button onClick={() => setEditingBook(book)} className="text-yellow-500">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(book.id)} className="text-red-500">
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
