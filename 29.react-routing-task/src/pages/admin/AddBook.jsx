import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useNavigate } from "react-router-dom"

// Validasiya sxemi (trim əlavə olunub)
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

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Yeni Kitab Əlavə Et</h1>

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
            // bütün string sahələri trim et
            const trimmedValues = Object.fromEntries(
              Object.entries(values).map(([key, val]) =>
                typeof val === "string" ? [key, val.trim()] : [key, val]
              )
            )

            await axios.post("https://book-store-api-liard-three.vercel.app/books", trimmedValues)
            resetForm()
            navigate("/admin/books")
          } catch (err) {
            console.error("Xəta baş verdi:", err)
          } finally {
            setSubmitting(false)
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {Object.keys(BookSchema.fields).map((field) => (
              <div key={field}>
                <label className="block text-gray-700 mb-2 capitalize">{field}</label>
                <Field
                  type="text"
                  name={field}
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name={field} component="div" className="text-red-500 text-sm mt-1" />
              </div>
            ))}

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Əlavə Et
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AddBook
