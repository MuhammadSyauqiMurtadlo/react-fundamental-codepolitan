import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  const changeSearch = () => {
    props.onSearch(search);
  };

  const searchKeyDown = (e) => {
    if (e.key === "Enter") {
      changeSearch();
    }
  };

  return (
    <>
      <div>
        Cari Artikel:{" "}
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchKeyDown}
        />
        <button onClick={changeSearch}>Cari</button>
      </div>
      <small>
        Ditemukan {props.resultCount} data dengan pencarian kata "{search}"
      </small>
    </>
  );
}

export default Search;
