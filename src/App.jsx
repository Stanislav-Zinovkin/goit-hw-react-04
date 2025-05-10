import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [gallery, setGallery] = useState([]);
  const [query, setQuery] = useState("");
  const myApiKey = "QZISFSen2b0BM38Ec0hNTK8ZDw23fcBV4MezLamP5Uc";

  useEffect(() => {
    if (query === "") return;
    async function fetchGallery() {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            headers: {
              Authorization: `Client-ID ${myApiKey}`,
            },
            params: { query: query },
          }
        );
        setGallery(response.data.results);
      } catch (error) {
        console.log("Error fetching gallery:", error);
      }
    }
    fetchGallery();
  }, [query]);

  const handleSubmit = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery gallery={gallery} />
    </div>
  );
}

export default App;
