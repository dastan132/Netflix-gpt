import { useEffect } from "react"
import { API_OPTION, TOPRATED_MOVIE_API } from "../utils/constants"
import { useDispatch } from "react-redux"
import {  addTopRatedMovies } from "../utils/movieSlice"


const useTopRatedMovies = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const TopRatedMovies = async () =>{
            try{
                const responce = await fetch(TOPRATED_MOVIE_API, API_OPTION)
                const json = await responce.json()
                //console.log(json.results)
                dispatch(addTopRatedMovies(json.results))
            } catch(error) {
                console.error("Error fetching movies:", error)
            }
        }
        TopRatedMovies()
    }, [dispatch])

}


export default useTopRatedMovies