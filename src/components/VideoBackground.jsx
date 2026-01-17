import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  // Fix: Don't render iframe until trailer data is available
  if (!trailerVideo) {
    return (
      <div className="w-screen aspect-video bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading trailer...</div>
      </div>
    );
  }

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        key={trailerVideo.key} // forces reload
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
