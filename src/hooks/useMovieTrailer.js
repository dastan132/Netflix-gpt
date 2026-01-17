import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const getMovieVideos = async () => {
      try {
        // Clear old trailer immediately (important)
        dispatch(addTrailerVideo(null));

        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTION
        );
        const json = await data.json();

        const trailers = json.results?.filter(
          (video) => video.type === "Trailer"
        );

        const trailer = trailers?.length
          ? trailers[0]
          : json.results?.[0];

        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    };

    getMovieVideos();
  }, [movieId, dispatch]);
};

export default useMovieTrailer;
