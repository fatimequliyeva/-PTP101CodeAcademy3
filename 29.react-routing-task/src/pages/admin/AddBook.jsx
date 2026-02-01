import { useEffect, useState } from "react"
import axios from "axios"
import { FaEdit, FaTrash, FaSpinner, FaPlus } from "react-icons/fa"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const BASE_URL = "https://book-store-api-liard-three.vercel.app/books"

const BookSchema = Yup.object().shape({
  title: Yup.string().required("Başlıq mütləqdir"),
  author: Yup.string().required("Müəllif mütləqdir"),
  price: Yup.number().required().positive(),
  description: Yup.string().required(),
  stock: Yup.number().required().min(0),
  genre: Yup.string().required(),
  language: Yup.string().required(),
  coverImageURL: Yup.string().url().required(),
  rating: Yup.number().min(0).max(5).required(),
  sold: Yup.number().min(0).required()
})

const emptyBook = {
  title: "",
  author: "",
  price: "",
  description: "",
  stock: "",
  genre: "",
  language: "",
  coverImageURL: "",
  rating: "",
  sold: ""
}

function AdminBooks() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [showAdd, setShowAdd] = useState(false)
  const [editingBook, setEditingBook] = useState(null)

  const fetchBooks = async () => {
    const res = await axios.get(BASE_URL)
    setBooks(res.data)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const filteredBooks = books.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.author.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = async (id) => {
    setStatus("loading")
    try {
      await axios.delete(`${BASE_URL}/${id}`)
    } catch (err) {
      console.log("DELETE error (vercel normaldır):", err)
    } finally {
      setStatus("success")
      fetchBooks()
      setTimeout(() => setStatus(""), 2000)
    }
  }

  return (
    <div className="p-6 mt-10">

      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">Admin Kitablar</h1>
        <button
          onClick={() => {
            setShowAdd(!showAdd)
            setEditingBook(null)
          }}
          className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-xl"
        >
          <FaPlus /> Add Book
        </button>
      </div>

      
      {status === "loading" && (
        <p className="mb-4 flex items-center gap-2 text-yellow-600">
          <FaSpinner className="animate-spin" /> Yüklənir...
        </p>
      )}

      {status === "success" && (
        <p className="mb-4 text-green-600 font-semibold">
          ✔ Uğurlu oldu
        </p>
      )}

      
      <input
        type="text"
        placeholder="Kitab və ya müəllif axtar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full md:w-1/2 px-4 py-2 border rounded-xl"
      />

     
      {(showAdd || editingBook) && (
        <Formik
          initialValues={editingBook || emptyBook}
          validationSchema={BookSchema}
          onSubmit={async (values, actions) => {
            setStatus("loading")
            try {
              if (editingBook) {
                await axios.put(`${BASE_URL}/${editingBook.id}`, values)
              } else {
                await axios.post(BASE_URL, values)
              }
            } catch (err) {
              console.log("POST/PUT error (vercel normaldır):", err)
            } finally {
              setStatus("success")
              setShowAdd(false)
              setEditingBook(null)
              actions.resetForm()
              fetchBooks()
              setTimeout(() => setStatus(""), 2000)
              actions.setSubmitting(false)
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="bg-white shadow-xl rounded-2xl p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">
                {editingBook ? "Kitabı Yenilə" : "Yeni Kitab Əlavə Et"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.keys(emptyBook).map((f) => (
                  <div key={f}>
                    <Field
                      name={f}
                      placeholder={f}
                      as={f === "description" ? "textarea" : "input"}
                      className="w-full border px-3 py-2 rounded"
                    />
                    <ErrorMessage
                      name={f}
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                ))}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-5 bg-green-600 text-white px-6 py-2 rounded-xl"
              >
                {isSubmitting ? "Yüklənir..." : "Yadda saxla"}
              </button>
            </Form>
          )}
        </Formik>
      )}

      
      <div className="overflow-x-auto bg-white shadow-xl rounded-2xl">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Şəkil</th>
              <th className="p-3">Ad</th>
              <th className="p-3">Müəllif</th>
              <th className="p-3">Qiymət</th>
              <th className="p-3">Əməliyyat</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((b, i) => (
              <tr key={b.id} className="border-t text-center">
                <td className="p-3">{i + 1}</td>
                <td className="p-3">
                  <img src={b.coverImageURL} className="w-12 h-16 mx-auto" />
                </td>
                <td className="p-3">{b.title}</td>
                <td className="p-3">{b.author}</td>
                <td className="p-3">${b.price}</td>
                <td className="p-3 flex justify-center gap-4">
                  <button
                    onClick={() => {
                      setEditingBook(b)
                      setShowAdd(false)
                    }}
                    className="text-yellow-500"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(b.id)}
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
