import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState("");

  const fetchFromApi = async () => {
    try {
      const response = await axios.get(API_URL);
    //   console.log(response.data);
      setPosts(response.data);
    } catch (err) {
      console.log("Error :: fetchFromAPi :: ", err);
      setError("Error :: fetchFromAPi");
      setPosts([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFromApi();
  }, []);
  return (
    <>
      {error ? (
        <>
          <p>error in fetching data</p>
          <p>we are working on it</p>
        </>
      ) : loading ? (
        <p>loading...</p>
      ) : posts.length > 0 ? (
        posts.map((post) => <Product key={post.id} post={post} />)
      ) : (
        <p>no products found</p>
      )}
    </>
  );
};

export default Home;
