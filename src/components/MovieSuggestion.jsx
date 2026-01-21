import { useSelector } from "react-redux";

const MovieSuggestion = () => {
  const results = useSelector((store) => store.search.searchResults);

  if (!results) return null;

  const topFiveResult = results.slice(0,5)

  if (topFiveResult.length === 0) {
    return (
      <p className="text-white text-center mt-6 font-bold text-3xl">
        No movies found 
      </p>
    );
  }

  return (
    <div className="px-8 mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {topFiveResult.map((movie) => (
        <div
          key={movie.id}
          className="bg-gray-900 rounded-lg overflow-hidden"
        >

          <img
            className="w-full h-[260px] object-cover"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={movie.title}
          />
      
          <div className="p-3 text-white">
            <h3 className="text-sm font-semibold">
              {movie.title}
            </h3>
            <p className="text-xs text-gray-400">
              ⭐ {movie.vote_average?.toFixed(1)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieSuggestion;
