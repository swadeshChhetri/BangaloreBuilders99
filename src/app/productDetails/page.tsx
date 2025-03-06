export default function PropertyDetails() {
  return (
    <>
      <div className="flex border-b pb-4 pt-[6%] justify-between">
        {/* Price and Details */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              ₹ 1.1 Cr <span className="text-gray-500 text-lg">@ 10,091 per sq.ft.</span>
            </h1>
            <p className="text-blue-500 text-sm">Estimated EMI ₹87,857</p>
          </div>
        </div>

        {/* Property Type */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mt-2">2BHK 2Baths</h2>
          <p className="text-gray-600">Flat/Apartment for Sale</p>
          <p className="text-gray-500 text-sm">in Sis Meridian, Gangai Nagar, Velachery</p>
        </div>

        {/* Buttons */}
        <div className="mt10 gap-3">
          <div className="text-right">
            <p className="text-gray-500 text-sm">Posted on Feb 14, 2025 | Ready to move</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Contact Owner <span className="text-xs">FREE</span></button>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-100">
            <span>💙</span> Shortlist
          </button>
        </div>
      </div>

      {/* RERA Status */}
      <div className="mt-3 flex items-center gap-2">
        <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">RERA STATUS</span>
        <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded">NOT AVAILABLE</span>
        <a href="https://rera.tn.gov.in/" className="text-blue-500 text-sm hover:underline">Website: https://rera.tn.gov.in/</a>
      </div>
      
      <div className="pt-20 grid grid-cols-1 md:grid-cols-[400px_auto] gap-6 p-6 bg-gray-100">
        {/* Smaller Image Container */}
        <div className="bg-white shadow-md p-4 rounded-lg w-[400px]">
          <img
            alt="Property"
            className="w-full h-48 object-cover rounded-md"
            src="/property-image.jpg"
          />
          <p className="text-gray-600 mt-2 text-center">📷 Photos (1/7)</p>
        </div>

        {/* Wider Property Details Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="space-y-2">
            <div className="bg-white p-4 shadow-md rounded-md flex items-center">
              <span className="text-gray-600 text-xl">📏</span>
              <p className="ml-3"><strong>Area:</strong> 1090 sq.ft. (101.26 sq.m.)</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md flex items-center">
              <span className="text-gray-600 text-xl">🏠</span>
              <p className="ml-3"><strong>Configuration:</strong> 2 Bedrooms, 2 Bathrooms, 1 Balcony</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md flex items-center">
              <span className="text-gray-600 text-xl">💰</span>
              <p className="ml-3"><strong>Price:</strong> ₹ 1.1 Crore + Govt Charges & Tax <br /> @ ₹ 10,091 per sq.ft. (Negotiable)</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md flex items-center">
              <span className="text-gray-600 text-xl">📍</span>
              <p className="ml-3"><strong>Address:</strong> Sis Meridian, Gangai Nagar, Velachery</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="bg-white p-4 shadow-md rounded-md flex items-center">
              <span className="text-gray-600 text-xl">🏢</span>
              <p className="ml-3"><strong>Floor Number:</strong> 1st of 7 Floors</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md flex items-center">
              <span className="text-gray-600 text-xl">🧭</span>
              <p className="ml-3"><strong>Facing:</strong> North</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md flex items-center">
              <span className="text-gray-600 text-xl">🌆</span>
              <p className="ml-3"><strong>Overlooking:</strong> Main Road</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md flex items-center">
              <span className="text-gray-600 text-xl">🎂</span>
              <p className="ml-3"><strong>Property Age:</strong> 10+ Years Old</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Right Section - Details */}
     
        {/* Owner Details */}
        <div className="bg-white shadow-md p-4 rounded-xl border">
          <h2 className="text-lg font-semibold">Owner Details</h2>
          <div className="flex items-center gap-3 mt-2">
            <img src="/owner-placeholder.jpg" alt="Owner" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold">Jyotipriya</p>
              <p className="text-gray-500 text-sm">Owner</p>
            </div>
          </div>
          <button className="mt-3 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
            View Phone Number
          </button>
          <p className="text-blue-500 mt-2 text-sm">Properties Listed: 2</p>
          <p className="text-gray-600 text-sm">Localities: Gangai Nagar</p>
        </div>

        {/* Inquiry Section */}
        <div className="bg-white shadow-md p-4 rounded-xl border">
          <h2 className="text-lg font-semibold">Send Enquiry to Owner</h2>
          <form className="space-y-3 mt-2">
            {/* Buyer Type */}
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="buyerType" className="form-radio text-blue-500" /> Individual
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="buyerType" className="form-radio text-blue-500" /> Dealer
              </label>
            </div>

            {/* Reason to Buy */}
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="reason" className="form-radio text-blue-500" /> Investment
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="reason" className="form-radio text-blue-500" /> Self Use
              </label>
            </div>

            {/* Input Fields */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-2 rounded-lg"
            />
            <div className="flex gap-2">
              <select className="border p-2 rounded-lg">
                <option>IND (+91)</option>
              </select>
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full border p-2 rounded-lg"
              />
            </div>
            <textarea
              placeholder="I am interested in this Property."
              className="w-full border p-2 rounded-lg"
              rows={3}
            />

            {/* Terms and Button */}
            <div className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <p className="text-sm">
                I agree to the <a href="#" className="text-blue-500">Terms & Conditions</a> and <a href="#" className="text-blue-500">Privacy Policy</a>
              </p>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Send Email & SMS
            </button>
          </form>
        </div>
     
    </div>
    </>
  );
}

