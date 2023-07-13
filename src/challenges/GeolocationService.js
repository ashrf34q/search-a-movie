import { useEffect, useState } from "react";

// Custom hook to be implemented
function useGeolocation(isClicked) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  useEffect(
    function () {
      if (isClicked > 0) {
        if (!navigator.geolocation)
          return setError("Your browser does not support geolocation");

        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setPosition({
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            });
            setIsLoading(false);
          },
          (error) => {
            setError(error.message);
            setIsLoading(false);
          }
        );
      }
    },
    [isClicked]
  );
  return { isLoading, position, error };
}

export default function GeolocationService() {
  const [countClicks, setCountClicks] = useState(0);
  const { isLoading, position, error } = useGeolocation(countClicks);
  const { lat, lng } = position;

  function handleClick() {
    setCountClicks((count) => count + 1);
  }

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
