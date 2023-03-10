import { useState, useEffect } from "react";
import API, { Movie, Cast, Crew } from "../API";
// Helpers
import { isPersistedState } from "../helpers";
// Types
export type MovieState = Movie & { actors: Cast[]; directors: Crew[] };

export const useMovieFetch = (movieId: string) => {
  const [state, setState] = useState<MovieState | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      // debugger;

      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        // Get directors only
        const directors = credits.crew.filter((member) => member.job === "Director");

        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });

        setTimeout(() => setLoading(false), 1000);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(movieId.toString());

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchMovie();
  }, [movieId]);

  // Write to sessionStorage
  useEffect(() => {
    // debugger;

    sessionStorage.setItem(movieId.toString(), JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
};
