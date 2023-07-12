// Custom hook

import { useState, useEffect } from "react";

const KEY = "f76db95";

export function useMovies(query, callback) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(
    function () {
      const controller = new AbortController();

      callback();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError(false);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) {
            throw new Error("Something went wrong while fetching movies");
          }

          const data = await res.json();

          if (data.Response === "False") {
            throw new Error("Movie not found!");
          }
          setMovies(data.Search);
          setIsLoading(false);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      // First check if query is more than two characters
      if (query.length < 3) {
        setError(false);
        setMovies([]);
        return;
      }
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, error, isLoading };
}
