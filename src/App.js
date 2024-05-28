import React from "react";
import SearchBar from "./components/navbar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayCard from "./components/DisplayCard";

export default function App() {
  return (
    <>
      <SearchBar />
      <DisplayCard />
    </>
  );
}
