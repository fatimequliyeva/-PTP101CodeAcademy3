import { useFormik } from "formik";
import * as Yup from "yup";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import contactBg from "../../assets/image/mainphoto2.jpg";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: ""
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Tam ad boş ola bilməz"),
      email: Yup.string()
        .email("Email düzgün formatda olmalıdır")
        .required("Email boş ola bilməz"),
      message: Yup.string().required("Mesaj boş ola bilməz")
    }),
    onSubmit: (values, helpers) => {
      console.log(values);
      helpers.resetForm();
    }
  });

  return (
    <>
      <section
        className="py-[80px] text-center md:py-[120px]"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="mx-auto max-w-[900px] px-4 text-white">
          <h1 className="text-[32px] font-bold leading-tight md:text-[42px]">Bizimlə Əlaqə</h1>
          <p className="mx-auto mt-4 max-w-[760px] text-[16px] leading-[1.6] text-white/90">
            Sağlam həyat üçün hər gün təzə meyvə və tərəvəzlərdən zövq alın. Bizimlə əlaqə saxlayaraq
            məhsullarımız haqqında daha çox məlumat əldə edə bilərsiniz.
          </p>
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-12">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="rounded-[12px] bg-[#f9f9f9] p-6 md:p-[60px]">
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-white shadow-sm">
                    <FiMapPin className="text-[#2E7D32]" size={22} />
                  </div>
                  <div>
                    <div className="text-[16px] font-semibold text-[#1B5E20]">Ünvan</div>
                    <div className="mt-2 text-[16px] leading-[1.6] text-gray-700">
                      Bakı şəhəri, İqor Ağayev küçəsi, Ev 3, Mənzil 4
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-white shadow-sm">
                    <FiPhone className="text-[#2E7D32]" size={22} />
                  </div>
                  <div>
                    <div className="text-[16px] font-semibold text-[#1B5E20]">Telefon</div>
                    <div className="mt-2 text-[16px] leading-[1.6] text-gray-700">+994 50 633 34 02</div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-white shadow-sm">
                    <FiMail className="text-[#2E7D32]" size={22} />
                  </div>
                  <div>
                    <div className="text-[16px] font-semibold text-[#1B5E20]">Email</div>
                    <div className="mt-2 text-[16px] leading-[1.6] text-gray-700">hello@vegefoods.com</div>
                  </div>
                </div>
              </div>

              <div className="rounded-[12px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.1)] md:p-[40px]">
                <h2 className="text-[22px] font-semibold text-[#1B5E20]">Mesaj Göndər</h2>

                <form onSubmit={formik.handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="fullName" className="block text-[14px] font-medium text-gray-800">
                      Ad
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="mt-2 h-[50px] w-full rounded-[8px] border border-[#ddd] bg-white px-4 text-[14px] text-gray-900 shadow-sm outline-none transition focus:border-[#4CAF50]"
                      placeholder="Tam adınızı daxil edin"
                    />
                    {formik.touched.fullName && formik.errors.fullName ? (
                      <p className="mt-2 text-xs text-red-600">{formik.errors.fullName}</p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[14px] font-medium text-gray-800">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="mt-2 h-[50px] w-full rounded-[8px] border border-[#ddd] bg-white px-4 text-[14px] text-gray-900 shadow-sm outline-none transition focus:border-[#4CAF50]"
                      placeholder="you@example.com"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <p className="mt-2 text-xs text-red-600">{formik.errors.email}</p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[14px] font-medium text-gray-800">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="mt-2 w-full rounded-[8px] border border-[#ddd] bg-white px-4 py-3 text-[14px] text-gray-900 shadow-sm outline-none transition focus:border-[#4CAF50]"
                      placeholder="Mesajınızı yazın..."
                    />
                    {formik.touched.message && formik.errors.message ? (
                      <p className="mt-2 text-xs text-red-600">{formik.errors.message}</p>
                    ) : null}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-[8px] bg-[#2E7D32] px-[30px] py-[14px] text-[14px] font-semibold text-white transition duration-300 hover:bg-[#1B5E20] disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={formik.isSubmitting}
                  >
                    Mesaj Göndər
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
