import { useState } from "react";
import posts from "../posts.json";
import Article from "../components/Article";

function Homepage() {
  const [search, setSearch] = useState("");
  const changeSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };
  return (
    <>
      <h1>Welcome to the Homepage</h1>
      <div>
        Cari Artikel:{" "}
        <input type="text" placeholder="Search..." onChange={changeSearch} />
      </div>
      <small>Ditemukan 0 data dengan pencarian kata "{search}"</small>
      {posts.map(({ title, date, tags }, index) => (
        <Article {...{ title, date, tags }} key={index} />
      ))}
    </>
  );
}

export default Homepage;
