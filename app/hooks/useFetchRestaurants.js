"use client";

import { db } from "@/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useFetchRestaurants = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    async function fetchRestaurants() {
      console.log(db);
      try {
        const q = query(collection(db, "restaurants"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let restaurantsArr = [];
          querySnapshot.forEach((doc) => {
            restaurantsArr.push({ ...doc.data(), id: doc.id });
          });
          setRestaurants(restaurantsArr);
        });
        return () => unsubscribe();
      } catch (error) {
        setError("Failed to load restaurants");
      } finally {
        setLoading(false);
      }
    }
    fetchRestaurants();
  }, []);
  return { loading, error, restaurants };
};

export const getRestaurantById = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    async function fetchRestaurant() {
      try {
        const q = query(collection(db, "restaurants", "id", id));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const restaurant = querySnapshot.docs[0].data();
          setRestaurant(restaurant);
          console.log(querySnapshot.docs[0].data());
        });
        unsubscribe();
      } catch (err) {
        setError("Failed to load restaurant");
      } finally {
        setLoading(false);
      }
    }
    fetchRestaurant();
  }, []);
  return { loading, error, restaurant };
};
