import React from "react";
import SearchBar from "./Components/searchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayCardContainer from "./Containers/DisplayCard/DisplayCardContainer";

export default function App() {
  return (
    <>
      <SearchBar />
      <DisplayCardContainer />
    </>
  );
}
