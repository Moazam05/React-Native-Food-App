import { useState, useEffect } from "react";

import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("Hi There!");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something Went Wrong");
    }
  };

  // call searchApi when component
  // is first rendered. BAD CODE
  // searchApi("pasta");
  useEffect(() => {
    searchApi("pasta");
  }, []);
  return [results, errorMessage, searchApi];
};
