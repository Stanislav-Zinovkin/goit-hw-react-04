import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [loading, setLoading] = useState(true);
  const [gallery, setGallery] = useState([]);
  const [query, setQuery] = useState("");
  const myApiKey = "QZISFSen2b0BM38Ec0hNTK8ZDw23fcBV4MezLamP5Uc";

  useEffect(() => {
    if (query === "") return;

    async function fetchGallery() {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
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
      <Loader loading={loading} />
      <ImageGallery gallery={gallery} />
    </div>
  );
}

export default App;
