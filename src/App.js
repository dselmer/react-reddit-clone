import React from "react";
import SearchBar from "./components/searchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayCard from "./components/displayCard/DisplayCard";

export default function App() {
  return (
    <>
      <SearchBar />
      <DisplayCard />
    </>
  );
}
