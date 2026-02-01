import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

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

function AddBook() {
  const navigate = useNavigate()
  const [successMessage, setSuccessMessage] = useState("")

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">Yeni Kitab Əlavə Et</h1>

      {successMessage && (
        <div className="mb-6 text-center text-green-600 font-semibold">
          {successMessage}
        </div>
      )}

      <Formik
        initialValues={{
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
        }}
        validationSchema={BookSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const trimmedValues = Object.fromEntries(
              Object.entries(values).map(([key, val]) =>
                typeof val === "string" ? [key, val.trim()] : [key, val]
              )
            )

            await axios.post("https://book-store-api-liard-three.vercel.app/books", trimmedValues)

            resetForm()
          } catch (err) {
            console.error("Xəta baş verdi:", err)
          } finally {
            // Hər halda mesaj çıxsın
            setSuccessMessage("✅ Kitab uğurla əlavə olundu!")

            setSubmitting(false)

            // 2 saniyə sonra yönləndir
            setTimeout(() => {
              navigate("/admin/books")
            }, 2000)
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sol sütun */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Başlıq</label>
                <Field name="title" className="w-full border px-3 py-2 rounded-lg" />
                <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Müəllif</label>
                <Field name="author" className="w-full border px-3 py-2 rounded-lg" />
                <ErrorMessage name="author" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Qiymət</label>
                <Field name="price" type="number" className="w-full border px-3 py-2 rounded-lg" />
                <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Stok</label>
                <Field name="stock" type="number" className="w-full border px-3 py-2 rounded-lg" />
                <ErrorMessage name="stock" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Janr</label>
                <Field name="genre" className="w-full border px-3 py-2 rounded-lg" />
                <ErrorMessage name="genre" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            {/* Sağ sütun */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Dil</label>
                <Field name="language" className="w-full border px-3 py-2 rounded-lg" />
                <ErrorMessage name="language" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Şəkil linki</label>
                <Field name="coverImageURL" className="w-full border px-3 py-2 rounded-lg" />
                <ErrorMessage name="coverImageURL" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Rating</label>
                <Field name="rating" type="number" className="w-full border px-3 py-2 rounded-lg" />
                <ErrorMessage name="rating" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Satılan sayı</label>
                <Field name="sold" type="number" className="w-full border px-3 py-2 rounded-lg" />
                <ErrorMessage name="sold" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Təsvir</label>
                <Field as="textarea" name="description" rows="3" className="w-full border px-3 py-2 rounded-lg" />
                <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            {/* Submit düyməsi */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-800 transition"
              >
                Əlavə Et
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AddBook
