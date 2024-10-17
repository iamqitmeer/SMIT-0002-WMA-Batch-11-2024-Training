import { Button, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../utils/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const categories = [
    "Electronics",
    "Clothing",
    "Books",
    "Furniture",
    "Toys",
    "Groceries",
    "Beauty",
    "Shoes",
    "Jewelry",
    "Home Decor",
    "Health",
    "Sports",
    "Garden",
    "Stationery",
    "Automobiles",
    "Bags",
    "Watches",
    "Musical Instruments",
    "Pet Supplies",
    "Fitness",
  ];
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!image) {
      alert("Please upload an image.");
      setLoading(false);
      return;
    }

    try {
      // Step 1: Upload image to Firebase Storage
      const imageRef = ref(storage, `products/${image.name}`);
      const uploadTask = uploadBytesResumable(imageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Handle the upload progress if needed
        },
        (error) => {
          // Handle upload errors
          console.error("Upload failed:", error);
          alert("Image upload failed!");
          setLoading(false);
        },
        async () => {
          // Get the download URL when the upload is complete
          const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);

          // Step 2: Create product object with the image URL

          let productCategory = categories[parseInt(category)];

          const productData = {
            title,
            description,
            price: parseFloat(price), // Ensure price is a number
            productCategory,
            imageURL: imageUrl, // Store the image URL from Firebase Storage
          };
          console.log(productData);

          // Step 3: Add product to Firestore
          const docRef = await addDoc(collection(db, "products"), productData);
          console.log("Document written with ID: ", docRef.id);

          // Reset form after successful submission
          setTitle("");
          setDescription("");
          setPrice("");
          setCategory("");
          setImage(null);
          setImagePreview(null);

          alert("Product added successfully!");
        }
      );
    } catch (error) {
      console.error("Error adding product: ", error);
      alert("Failed to add product!");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8">
        {/* Product Title */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Product Title
          </label>
          <input
            type="text"
            placeholder="Enter product title"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Product Description */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Product Description
          </label>
          <textarea
            placeholder="Enter product description"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price ($)
          </label>
          <input
            type="number"
            placeholder="Enter product price"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="mb-6 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <Select
            className="w-full px-3 py-2 rounded-lg shadow-sm "
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            label="Select an Category"
            fullWidth
          >
            {categories.map((cat, index) => (
              <SelectItem key={index} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </Select>
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upload Product Image
          </label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="block w-full cursor-pointer text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Product Preview"
                className="w-40 h-40 object-cover rounded-md"
              />
            </div>
          )}
        </div>

        <div className="text-center">
          {loading ? (
            <Button
              disabled={loading}
              className="w-full text-white bg-primary-600 hover:bg-primary-700"
              color="primary"
              spinner={
                <svg
                  className="animate-spin h-5 w-5 text-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    fill="currentColor"
                  />
                </svg>
              }
            >
              Loading
            </Button>
          ) : (
            <Button
              variant="shadow"
              color="primary"
              type="submit"
              radius="lg"
              className="text-white font-semibold px-6 py-4 rounded-lg shadow-md w-full transition-all duration-200"
            >
              Add Product
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
