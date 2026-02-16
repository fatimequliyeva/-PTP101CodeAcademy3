import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import contactBg from "../../assets/image/mainphoto2.jpg";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: ""
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Tam ad boş ola bilməz"),
      email: Yup.string()
        .email("Email düzgün formatda olmalıdır")
        .required("Email boş ola bilməz"),
      subject: Yup.string(),
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
        className="py-[90px] text-center text-white md:py-[120px]"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="mx-auto max-w-[900px] px-4">
          <div className="text-[11px] font-semibold tracking-[0.2em] text-white/80">HOME&nbsp;&nbsp;CONTACT US</div>
          <h1 className="mt-3 text-[34px] font-extrabold tracking-[0.08em] md:text-[46px]">CONTACT US</h1>
        </div>
      </section>

      <section className="bg-white py-10 md:py-12">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="text-[18px] text-gray-800">
                <FaMapMarkerAlt />
              </div>
              <div className="mt-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-gray-900">Address</div>
              <div className="mt-2 text-[13px] leading-[1.7] text-[#777]">
                198 West 21th Street, Suite 721 New York NY 10016
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[18px] text-gray-800">
                <FaPhoneAlt />
              </div>
              <div className="mt-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-gray-900">Phone</div>
              <div className="mt-2 text-[13px] leading-[1.7] text-[#777]">+ 1235 2355 98</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[18px] text-gray-800">
                <FaEnvelope />
              </div>
              <div className="mt-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-gray-900">Email</div>
              <div className="mt-2 text-[13px] leading-[1.7] text-[#777]">info@yoursite.com</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[18px] text-gray-800">
                <FaGlobe />
              </div>
              <div className="mt-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-gray-900">Website</div>
              <div className="mt-2 text-[13px] leading-[1.7] text-[#777]">yoursite.com</div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-2">
            <div className="h-[280px] w-full overflow-hidden border border-[#e5e5e5] md:h-[300px]">
              <iframe
                title="Contact map"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Code%20Academy%20Baku&output=embed"
              />
            </div>

            <div className="border border-[#e5e5e5] bg-white p-6 md:p-8">
              <form onSubmit={formik.handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="fullName" className="sr-only">
                    Your Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="h-[42px] w-full rounded-[4px] border border-[#262626] bg-[#262626] px-4 text-[13px] text-white outline-none transition placeholder:text-gray-300 focus:border-[#82ae46]"
                    aria-label="Your Name"
                    aria-invalid={Boolean(formik.touched.fullName && formik.errors.fullName)}
                    aria-describedby={formik.touched.fullName && formik.errors.fullName ? "fullName-error" : undefined}
                    placeholder="Your Name"
                  />
                  {formik.touched.fullName && formik.errors.fullName ? (
                    <p id="fullName-error" className="mt-2 text-xs text-red-600" role="alert">
                      {formik.errors.fullName}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="h-[42px] w-full rounded-[4px] border border-[#262626] bg-[#262626] px-4 text-[13px] text-white outline-none transition placeholder:text-gray-300 focus:border-[#82ae46]"
                    aria-label="Your Email"
                    aria-invalid={Boolean(formik.touched.email && formik.errors.email)}
                    aria-describedby={formik.touched.email && formik.errors.email ? "email-error" : undefined}
                    placeholder="Your Email"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p id="email-error" className="mt-2 text-xs text-red-600" role="alert">
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="h-[42px] w-full rounded-[4px] border border-[#262626] bg-[#262626] px-4 text-[13px] text-white outline-none transition placeholder:text-gray-300 focus:border-[#82ae46]"
                    aria-label="Subject"
                    aria-describedby={formik.touched.subject && formik.errors.subject ? "subject-error" : undefined}
                    placeholder="Subject"
                  />
                  {formik.touched.subject && formik.errors.subject ? (
                    <p id="subject-error" className="mt-2 text-xs text-red-600" role="alert">
                      {formik.errors.subject}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full resize-none rounded-[4px] border border-[#d7d7d7] px-4 py-3 text-[13px] text-gray-900 outline-none transition focus:border-[#82ae46]"
                    aria-label="Message"
                    aria-invalid={Boolean(formik.touched.message && formik.errors.message)}
                    aria-describedby={formik.touched.message && formik.errors.message ? "message-error" : undefined}
                    placeholder="Message"
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <p id="message-error" className="mt-2 text-xs text-red-600" role="alert">
                      {formik.errors.message}
                    </p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="inline-flex rounded-full bg-[#82ae46] px-6 py-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#6f963c] disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={formik.isSubmitting}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
