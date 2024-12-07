// src/ManageProducts.js
import React, { useEffect, useState } from "react";
import { auth, db } from "../utils/firebase"; // Adjust the path to your firebase.js
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Button, Input, Textarea, Card, CardBody } from "@nextui-org/react"; // Import Next UI components
import { onAuthStateChanged } from "firebase/auth";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editProductData, setEditProductData] = useState({
    title: "",
    productCategory: "",
    price: "",
    description: "",
    imageURL: "",
  });

  const [isUserSignIn, setIsUserSignIn] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user);
        setIsUserSignIn(user);
      } else {
        console.log("Not Signed In");
        setIsUserSignIn(null);
      }
    });
  }, []);
  let navigate = useNavigate();


  // Fetch products from Firestore in real-time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const productsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
      console.log("Fetched Products: ", productsList); // Debug: Log the fetched products
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Update product
  const handleUpdateProduct = async (e, id) => {
    e.preventDefault();
    try {
      const productRef = doc(db, "products", id);
      await updateDoc(productRef, editProductData);
      setEditProductId(null); // Reset edit mode
      setEditProductData({
        title: "",
        productCategory: "",
        price: "",
        description: "",
        imageURL: "",
      }); // Reset input fields
    } catch (error) {
      console.error("Error updating product: ", error);
    }
  };

  // Delete product
  const handleDeleteProduct = async (id) => {
    try {
      const productRef = doc(db, "products", id);
      await deleteDoc(productRef);
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditProductData({ ...editProductData, imageURL: reader.result });
      };
      reader.readAsDataURL(file); // Convert image file to base64 string
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-center text-4xl font-bold mb-6 text-gray-800">
        Manage Products
      </h2>
      <Button
        onClick={() => navigate("/add_product")}
        className="mb-4"
        size="lg"
        color="primary"
      >
        Add New Product
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <Card
              key={product.id}
              className="border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <CardBody>
                <img
                  src={product.imageURL}
                  alt={product.title}
                  className="h-48 w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {product.title}
                </h3>
                <p className="text-gray-700">
                  <strong>Category:</strong> {product.productCategory}
                </p>
                <p className="text-gray-700">
                  <strong>Price:</strong> ${product.price}
                </p>
                <p className="text-gray-700">
                  <strong>Description:</strong> {product.description}
                </p>
                <div className="mt-4 flex justify-between">
                  <Button
                    onClick={() => {
                      setEditProductId(product.id);
                      setEditProductData({
                        title: product.title,
                        productCategory: product.productCategory,
                        price: product.price,
                        description: product.description,
                        imageURL: product.imageURL,
                      });
                    }}
                    color="primary"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteProduct(product.id);
                    }}
                    color="danger"
                  >
                    Delete
                  </Button>
                </div>
              </CardBody>

              {/* Inline Edit Form */}
              {editProductId === product.id && (
                <form
                  onSubmit={(e) => handleUpdateProduct(e, product.id)}
                  className="mt-4 border-t pt-4"
                >
                  <Input
                    className="mt-2 w-full"
                    label="Product Name"
                    value={editProductData.title}
                    onChange={(e) =>
                      setEditProductData({
                        ...editProductData,
                        title: e.target.value,
                      })
                    }
                    required
                  />
                  <Input
                    className="mt-2 w-full"
                    label="Category"
                    value={editProductData.productCategory}
                    onChange={(e) =>
                      setEditProductData({
                        ...editProductData,
                        productCategory: e.target.value,
                      })
                    }
                    required
                  />
                  <Input
                    className="mt-2 w-full"
                    label="Price"
                    type="number"
                    value={editProductData.price}
                    onChange={(e) =>
                      setEditProductData({
                        ...editProductData,
                        price: e.target.value,
                      })
                    }
                    required
                  />
                  <Textarea
                    className="mt-2 w-full"
                    label="Description"
                    value={editProductData.description}
                    onChange={(e) =>
                      setEditProductData({
                        ...editProductData,
                        description: e.target.value,
                      })
                    }
                    required
                  />
                  <div className="mt-2">
                    <label className="block mb-1 text-gray-700">
                      Product Image
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                    {editProductData.imageURL && (
                      <img
                        src={editProductData.imageURL}
                        alt="Preview"
                        className="mt-2 h-32 w-full object-cover rounded"
                      />
                    )}
                  </div>
                  <Button type="submit" className="mt-4 w-full" color="success">
                    Update Product
                  </Button>
                  <Button
                    type="button"
                    className="mt-4 w-full ml-2"
                    color="danger"
                    onClick={() => setEditProductId(null)} // Cancel editing
                  >
                    Cancel
                  </Button>
                </form>
              )}
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
