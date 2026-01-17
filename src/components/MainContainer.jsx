import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { setRandomIndex } from "../utils/movieSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const randomIndex = useSelector((store) => store.movies.randomIndex);

  useEffect(() => {
    if (!movies || movies.length === 0) return;

    const interval = setInterval(() => {
      const maxIndex = Math.min(20, movies.length - 1);
      const random = Math.floor(Math.random() * (maxIndex + 1));
      dispatch(setRandomIndex(random));
    }, 40000);

    return () => clearInterval(interval);
  }, [dispatch, movies]);

  // ⬇️ Early return AFTER hooks (this is correct)
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[randomIndex];
  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0 ">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
