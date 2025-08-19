import React from 'react'

const InfoSection = () => {
  return (
    <>
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Custom Packaging Designed To Deliver Both Form & Function
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Offering personalized services to provide custom packaging that fits your brand like a glove.
          </p>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Materials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the real quality with our premium stock, as we source only the finest materials, providing durability, reliability, and an amazing texture!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ad-Ons & Finishing */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Ad-Ons & Finishing</h3>
              <p className="text-gray-600">
                Enhance your packaging with premium finishes like foil stamping, embossing, spot UV, and custom inserts.
              </p>
            </div>

            {/* Paper Weight */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Paper Weight</h3>
              <p className="text-gray-600">
                Choose from various paper weights to achieve the perfect balance of durability and presentation for your packaging.
              </p>
            </div>

            {/* Shipping */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Shipping</h3>
              <p className="text-gray-600">
                Our packaging solutions are designed to protect your products during transit while maintaining brand appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Premium Quality Materials</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            From the sturdiness of cardboard and corrugated stock to the shimmer of holographic and metallic options, the eco-friendliness of Kraft boxes to the opulence of rigid packaging – our thorough selection guarantees that each material satisfies our rigorous standards.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="flex items-center">
              <div className="mr-4 text-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p>Durability and reliability</p>
            </div>
            <div className="flex items-center">
              <div className="mr-4 text-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p>Amazing texture and finish</p>
            </div>
            <div className="flex items-center">
              <div className="mr-4 text-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p>Eco-friendly options available</p>
            </div>
            <div className="flex items-center">
              <div className="mr-4 text-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p>Rigorous quality standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cardboard Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cardboard Options</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a variety of cardboard solutions to meet your specific packaging needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kraft */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-amber-100 flex items-center justify-center">
                <div className="text-amber-800 text-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="text-lg font-semibold mt-2 block">Kraft</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Kraft Cardboard</h3>
                <p className="text-gray-600">
                  Eco-friendly and durable, perfect for brands with sustainability values. Natural brown appearance gives a rustic, authentic look.
                </p>
              </div>
            </div>

            {/* Rigid */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <div className="text-blue-800 text-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="text-lg font-semibold mt-2 block">Rigid</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Rigid Cardboard</h3>
                <p className="text-gray-600">
                  Premium stiffness and durability for high-end products. Provides superior protection and a luxury unboxing experience.
                </p>
              </div>
            </div>

            {/* Corrugated */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <div className="text-green-800 text-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg font-semibold mt-2 block">Corrugated</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Corrugated Cardboard</h3>
                <p className="text-gray-600">
                  Excellent shock absorption and strength for shipping protection. Available in various flute sizes for different needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Custom Packaging?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let us help you design packaging that perfectly represents your brand and delights your customers.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>
    </>
  )
}

export default InfoSection
