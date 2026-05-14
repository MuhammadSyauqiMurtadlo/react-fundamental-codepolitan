import { useState, useEffect } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";
// import js from "@eslint/js";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [resultCount, setResultCount] = useState(postsData.length);
  // const [externalPost, setExternalPost] = useState([]);

  const handleSearch = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    setPosts(filteredPosts);
    setResultCount(filteredPosts.length);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setExternalPost(json);
      });
  }, []);

  return (
    <>
      <h1>Welcome to the Homepage</h1>
      <Search onSearch={handleSearch} resultCount={resultCount} />
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
