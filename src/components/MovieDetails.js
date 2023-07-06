import { useEffect, useState } from "react";
import StarRating from "./StarRating";

function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watchedList,
  apiKey,
}) {
  const [movie, setMovie] = useState({});
  const [rating, setRating] = useState(0);
  const [existsWatchlist, setExistsWatchlist] = useState(false);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Released: released,
    Genre: genre,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Actors: actors,
    Director: director,
  } = movie;

  const checkMovieExists = function () {
    const isWatched = watchedList
      .map((movie) => movie.imdbID)
      .includes(selectedId);

    setExistsWatchlist(isWatched);
  };

  useEffect(
    function () {
      async function getMovieDetails() {
        // Reset rating
        setRating(0);

        setExistsWatchlist(false);

        // Check if movie exists
        checkMovieExists();

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&i=${selectedId}`
        );
        const data = await res.json();
        // console.log(data);
        setMovie(data);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating: rating,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  function handleRating(rating) {
    setRating(rating);
    // onSetRate(rating);
  }

  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={onCloseMovie}>
          &larr;
        </button>
        <img src={poster} alt={`Poster of ${title}`} />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>
            {released} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p>
            <span>⭐</span>
            {imdbRating} IMDB rating
          </p>
        </div>
      </header>
      <section>
        <div className="rating">
          {!existsWatchlist && (
            <StarRating
              maxRating={10}
              size={24}
              onSetRating={handleRating}
              rating={rating}
            />
          )}
          {rating > 0 && !existsWatchlist && (
            <button className="btn-add" onClick={handleAdd}>
              + Add to list
            </button>
          )}
          {existsWatchlist && <p>✅ Exists your watchlist</p>}
        </div>
        <p>
          <em>{plot}</em>
        </p>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
      </section>
    </div>
  );
}

export default MovieDetails;
