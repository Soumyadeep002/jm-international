import React from "react";

function BuyNow() {
  return (
    <div className="flex-auto flex space-x-4">
      <button
        className="h-12 px-6 font-semibold rounded-sm bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300 shadow-md"
        type="button"
      >
        BUY NOW
      </button>
    </div>
  );
}

export default BuyNow;
