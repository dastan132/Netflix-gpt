import { useEffect } from "react"
import { API_OPTION, NOW_PLAYING_API } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"


const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const nowPlayingMoviesData = async () =>{
            try{
                const responce = await fetch(NOW_PLAYING_API, API_OPTION)
                const json = await responce.json()
                console.log(json.results)
                dispatch(addNowPlayingMovies(json.results))
            } catch(error) {
                console.error("Error fetching movies:", error)
            }
        }
        nowPlayingMoviesData()
    }, [dispatch])

}


export default useNowPlayingMovies