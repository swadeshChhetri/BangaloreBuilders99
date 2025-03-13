export default function PropertyDetails() {
  return (
    <div className="container mx-auto p-6 pt-20">
      {/* Header Section */}
      {/* <div className="flex flex-col md:flex-row justify-between border-b pb-6">
        {/* Price and Details *
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-bold text-gray-900">
            ₹ 1.1 Cr <span className="text-gray-500 text-lg">@ 10,091 per sq.ft.</span>
          </h1>
          <p className="text-blue-500 text-sm">Estimated EMI ₹87,857</p>
        </div>

        {/* Property Type *
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-gray-800">2BHK 2Baths</h2>
          <p className="text-gray-600">Flat/Apartment for Sale</p>
          <p className="text-gray-500 text-sm">Sis Meridian, Gangai Nagar, Velachery</p>
        </div>

        {/* Buttons *
        <div className="flex flex-col md:items-end gap-2">
          <p className="text-gray-500 text-sm">Posted on Feb 14, 2025 | Ready to move</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Contact Owner <span className="text-xs">FREE</span>
          </button>
          <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-100 transition">
            💙 Shortlist
          </button>
        </div>
      </div> */}

      {/* RERA Status */}
      <div className="mt-4 flex items-center gap-2">
        <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">RERA STATUS</span>
        <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded">NOT AVAILABLE</span>
        <a href="https://rera.tn.gov.in/" className="text-blue-500 text-sm hover:underline">View on RERA Website</a>
      </div>

      {/* Property Details */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-[400px_auto] gap-6 bg-gray-100 p-6 rounded-lg">
        {/* Image Container */}
        <div className="bg-white shadow-md p-4 rounded-lg">
          <img
            alt="Property"
            className="w-full h-60 object-cover rounded-md"
            src="/images/house2.jpg"
          />
          <p className="text-gray-600 mt-2 text-center">📷 Photos (1/7)</p>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DetailCard icon="📏" label="Area" value="1090 sq.ft. (101.26 sq.m.)" />
          <DetailCard icon="🏠" label="Configuration" value="2 Bedrooms, 2 Bathrooms, 1 Balcony" />
          <DetailCard icon="💰" label="Price" value="₹ 1.1 Crore + Govt Charges & Tax (Negotiable)" />
          <DetailCard icon="📍" label="Location" value="Sis Meridian, Gangai Nagar, Velachery" />
          <DetailCard icon="🏢" label="Floor Number" value="1st of 7 Floors" />
          <DetailCard icon="🧭" label="Facing" value="North" />
          <DetailCard icon="🌆" label="Overlooking" value="Main Road" />
          <DetailCard icon="🎂" label="Property Age" value="10+ Years Old" />
        </div>
      </div>

      {/* Owner & Inquiry Section */}
      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Owner Details */}
        <OwnerCard />
        {/* Inquiry Form */}
        <InquiryForm />
      </div>
    </div>
  );
}

function DetailCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-md flex items-center">
      <span className="text-gray-600 text-xl">{icon}</span>
      <p className="ml-3"><strong>{label}:</strong> {value}</p>
    </div>
  );
}

function OwnerCard() {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl border">
      <h2 className="text-lg font-semibold">Owner Details</h2>
      <div className="flex items-center gap-3 mt-2">
        <img src="/images/seller.jpg" alt="Owner" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold">Jyotipriya</p>
          <p className="text-gray-500 text-sm">Owner</p>
        </div>
      </div>
      <button className="mt-3 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
        View Phone Number
      </button>
      <p className="text-blue-500 mt-2 text-sm">Properties Listed: 2</p>
      <p className="text-gray-600 text-sm">Localities: Gangai Nagar</p>
    </div>
  );
}

function InquiryForm() {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl border">
      <h2 className="text-lg font-semibold">Send Enquiry to Owner</h2>
      <form className="space-y-3 mt-2">
        <input type="text" placeholder="Your Name" className="w-full border p-2 rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full border p-2 rounded-lg" />
        <input type="text" placeholder="Mobile Number" className="w-full border p-2 rounded-lg" />
        <textarea placeholder="I am interested in this Property." className="w-full border p-2 rounded-lg" rows={3} />
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Send Enquiry
        </button>
      </form>
    </div>
  );
}


