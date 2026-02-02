import { useEffect } from "react"
import { API_OPTION, POPULAR_MOVIE_API } from "../utils/constants"
import { useDispatch } from "react-redux"
import {  addPopularMovies } from "../utils/movieSlice"


const usePopularMovies = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const popularMovies = async () =>{
            try{
                const responce = await fetch(POPULAR_MOVIE_API, API_OPTION)
                const json = await responce.json()
                console.log(json.results)
                dispatch(addPopularMovies(json.results))
            } catch(error) {
                console.error("Error fetching movies:", error)
            }
        }
        popularMovies()
    }, [dispatch])

}


export default usePopularMovies