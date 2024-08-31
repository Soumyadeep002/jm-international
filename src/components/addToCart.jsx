import React, { Component } from "react";

export class AddToCart extends Component {
  static propTypes = {};

  render() {
    return (
        <div className="flex-auto flex space-x-4">
          <button
            className="h-12 px-6 font-semibold rounded-sm bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300 shadow-md"
            type="button"
          >
            ADD TO CART
          </button>
        </div>
    )
  }
}

export default AddToCart;
