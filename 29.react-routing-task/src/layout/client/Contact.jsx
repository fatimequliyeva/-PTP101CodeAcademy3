import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"

function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      
      {/* Title */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Əlaqə
        </h2>
        <p className="text-gray-600 max-w-xl">
          Bizimlə əlaqə saxlamaq üçün aşağıdakı məlumatlardan istifadə edə bilərsiniz.
          Komandamız sizə ən qısa zamanda cavab verəcək.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Email */}
        <div className="border rounded-xl p-6 hover:shadow-md transition">
          <FaEnvelope className="text-2xl text-blue-600 mb-4" />
          <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
          <p className="text-gray-600 text-sm">
            fatimashg@code.edu.az
          </p>
        </div>

        {/* Phone */}
        <div className="border rounded-xl p-6 hover:shadow-md transition">
          <FaPhoneAlt className="text-2xl text-green-600 mb-4" />
          <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
          <p className="text-gray-600 text-sm">
            +994 50 633 34 02
          </p>
        </div>

        {/* Location */}
        <div className="border rounded-xl p-6 hover:shadow-md transition">
          <FaMapMarkerAlt className="text-2xl text-red-500 mb-4" />
          <h3 className="font-semibold text-gray-900 mb-1">Ünvan</h3>
          <p className="text-gray-600 text-sm">
            Bakı, Azərbaycan
          </p>
        </div>

      </div>
    </div>
  )
}

export default Contact
