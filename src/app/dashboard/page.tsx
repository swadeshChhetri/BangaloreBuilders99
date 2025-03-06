// import { Card, CardContent } from "@/components/ui/card";
import UserSidebar from "@/components/userSidebar";

const SubscriptionSection = () => {
  return (
    <div className="flex pt-18">
      <UserSidebar />
      <div className="ml-72 p-4 shadow-md rounded-lg w-[75%]">
        <div>
          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="text-lg font-semibold">Active Subscriptions <span className="text-green-500">1</span></h3>
          </div>
          <div className="mt-3 grid grid-cols-4 font-semibold text-gray-700">
            <span>Product Name</span>
            <span>Quantity</span>
            <span>Quantity Left</span>
            <span></span>
          </div>
          <div className="mt-2 grid grid-cols-4 text-gray-600 border-t pt-2">
            <span>Plain Listings</span>
            <span>1.0</span>
            <span>1</span>
            <span className="text-sm text-gray-500">1 expires in 4685 days</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;
