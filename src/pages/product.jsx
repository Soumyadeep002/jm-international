import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import baseUrl from "../baseUrl";
import AddToCart from "../components/addToCart";
import BuyNow from "../components/buyNow";
import ProductCard from "../components/productCard";

const Product = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/product/products/${productId}`
        );
        setProduct(response.data);
        setLoading(false);

        // Fetch related products
        const relatedResponse = await axios.get(
          `${baseUrl}/api/product/category/${response.data.category}`
        );
        setRelatedProducts(relatedResponse.data.filter(p => p._id !== productId).slice(0, 4));
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, productId]);

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <div className="text-center text-red-600">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-2/3">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1">
              {product.image.map((img, index) => (
                <img
                  key={index}
                  src={`${baseUrl}/${img}`}
                  alt={`${product.name} - ${index + 1}`}
                  className={`w-full h-24 object-cover cursor-pointer mb-2 ${selectedImage === index ? 'border-2 border-pink-500' : ''}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
            <div className="col-span-4">
              <img
                src={`${baseUrl}/${product.image[selectedImage]}`}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{product.description}</p>
          <div className="mb-4">
            <span className="text-2xl font-semibold">&#8377;{(product.price / 100).toFixed(2)}</span> {/* Change to INR */}
            <span className="ml-2 text-green-600">inclusive of all taxes</span>
          </div>
          <div className="mb-4">
            <p className="font-medium">
              Category: <span className="font-normal">{product.category}</span>
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <AddToCart product={product} />
            <BuyNow product={product} />
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Product Details</h3>
            <ul className="list-disc list-inside">
              <li>Material: Cotton</li>
              <li>Color: As seen in image</li>
              <li>Pattern: Solid</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You may also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct._id} product={relatedProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
