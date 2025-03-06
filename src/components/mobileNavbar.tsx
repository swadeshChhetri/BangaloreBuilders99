// components/MobileNavbar.tsx
export default function MobileNavbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-between items-center px-4 py-2 rounded-t-3xl border-t z-50 md:hidden">
      {/* Home */}
      <div className="flex flex-col items-center text-blue-600">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 9.857L12 3l9 6.857V21H3V9.857z" />
        </svg>
        <span className="text-xs font-medium">Home</span>
      </div>

      {/* Insights */}
      <div className="flex flex-col items-center text-gray-600">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 12h3v8H5v-8zm5-4h3v12h-3V8zm5 6h3v6h-3v-6z" />
        </svg>
        <span className="text-xs font-medium">Insights</span>
      </div>

      {/* Floating Action Button */}
      <div className="relative">
      <div className="absolute -top-[36px] left-[22px] transform -translate-x-1/2">
        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 5v14m7-7H5" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Sell/Rent */}
      <div className="flex flex-col items-center text-gray-600 pt-4">
        <span className="text-xs font-medium">Sell/Rent</span>
      </div>
      </div>

      {/* Shortlisted */}
      <div className="flex flex-col items-center text-gray-600">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21l-8-8 3-3 5 5 5-5 3 3-8 8z" />
        </svg>
        <span className="text-xs font-medium">Shortlisted</span>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center text-gray-600">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 4-7 8-7s8 3 8 7H4z" />
        </svg>
        <span className="text-xs font-medium">Profile</span>
      </div>
    </div>
  );
}
