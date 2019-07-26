import React, { useState } from "react";
import "../App.css";
// import spinner from "../ajax-loader.gif";
// import SearchResult from "./SearchResult";
import Search from "./Search";
import SearchResult from "./SearchResult";

const App = () => {
  const [products, setProducts] = useState("");

  const search = searchValue => {
    fetch(
      `http://www.cljoias.vtexcommercestable.com.br/api/catalog_system/pub/products/search/${searchValue}`,
      {
        method: "GET",
        headers: {
          cookie: "janus_sid=aac43e0c-ab16-4455-80ae-5dfd9e22c48b"
        }
      }
    )
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <Search search={search} />
      <SearchResult />
    </div>
  );
};

export default App;
