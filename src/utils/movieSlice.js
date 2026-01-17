import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    randomIndex: 0,
    trailerVideo: null,
    // popularMovies: null,
    // topRatedMovies: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },

    setRandomIndex: (state,action) => {
      state.randomIndex = action.payload
    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo, setRandomIndex,addPopularMovies,addTopRatedMovies ,addUpcomingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
