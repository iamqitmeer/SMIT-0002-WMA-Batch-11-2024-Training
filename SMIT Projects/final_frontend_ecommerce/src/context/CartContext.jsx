import { createContext, useEffect, useState } from "react";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { app, auth } from "../utils/firebase";

export let CartContext = createContext();

export let CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const db = getFirestore(app);

  // Fetch cart from Firestore when the user is logged in
  const fetchCartFromFirestore = async (userId) => {
    try {
      const docRef = doc(db, "carts", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCart(docSnap.data().cart); // Set the cart data from Firestore
      } else {
        setCart([]); // If no cart exists, set an empty cart
      }
    } catch (error) {
      console.error("Error fetching cart: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Save cart to Firestore whenever cart data changes
  const saveCartToFirestore = async (userId, cart) => {
    try {
      const docRef = doc(db, "carts", userId);
      await setDoc(docRef, { cart }, { merge: true }); // Save the updated cart
    } catch (error) {
      console.error("Error saving cart: ", error);
    }
  };

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchCartFromFirestore(currentUser.uid); // Fetch cart when user logs in
      } else {
        setUser(null);
        setCart([]); // Clear cart if no user is logged in
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Save the cart to Firestore when it changes
  useEffect(() => {
    if (user) {
      saveCartToFirestore(user.uid, cart); // Save cart only if user exists
    }
  }, [cart, user]);

  if (loading) {
    return <div>Loading...</div>; // Show loading spinner while data is being fetched
  }

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
