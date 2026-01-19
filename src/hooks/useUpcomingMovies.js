import { useEffect } from "react"
import { API_OPTION, UPCOMMING_MOVIE_API } from "../utils/constants"
import { useDispatch } from "react-redux"
import {  addUpcomingMovies } from "../utils/movieSlice"


const useUpcomingMovies = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const upcomingMovies = async () =>{
            try{
                const responce = await fetch(UPCOMMING_MOVIE_API, API_OPTION)
                const json = await responce.json()
                //console.log(json.results)
                dispatch(addUpcomingMovies(json.results))
            } catch(error) {
                console.error("Error fetching movies:", error)
            }
        }
        upcomingMovies()
    }, [dispatch])

}


export default useUpcomingMovies