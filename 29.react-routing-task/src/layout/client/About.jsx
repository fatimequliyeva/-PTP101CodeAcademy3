function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-10">
        
        <h2 className="text-4xl font-semibold text-gray-900 mb-6">
          Haqqımızda
        </h2>

        <p className="text-gray-600 leading-relaxed text-lg max-w-3xl">
          <span className="font-medium text-gray-800">
            Book Explorer
          </span>{" "}
          platforması kitabsevərlərə yeni kitabları kəşf etmək, 
          favoritlərə əlavə etmək və rahat şəkildə araşdırmaq imkanı yaradır.
        </p>

        <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mt-4">
          Məqsədimiz oxumağı sevən insanları bir araya gətirmək və onların 
          oxu təcrübəsini daha funksional, daha estetik və daha zövqlü etməkdir.
        </p>

        <div className="mt-10 border-t pt-6 text-sm text-gray-400">
          Book Explorer © {new Date().getFullYear()}
        </div>
      </div>

    </section>
  )
}

export default About
