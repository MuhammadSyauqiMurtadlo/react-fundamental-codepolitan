import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  const changeSearch = (event) => {
    setSearch(event.target.value);
    props.onSearch(event.target.value);
  };

  return (
    <>
      <div>
        Cari Artikel:{" "}
        <input type="text" placeholder="Search..." onChange={changeSearch} />
      </div>
      <small>
        Ditemukan {props.resultCount} data dengan pencarian kata "{search}"
      </small>
    </>
  );
}

export default Search;
