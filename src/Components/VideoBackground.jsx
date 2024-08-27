import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants"




const VideoBackground = ({movieId}) => {
  const getMovieVideos = async () => {
    const data = await fetch(('https://api.themoviedb.org/3/movie/533535/videos?language=en-US', API_OPTIONS))
    const json = await data.json();
    console.log(json)
  };
  useEffect (() => {
    getMovieVideos()
  }, []);

  return (
    <div>
      VideoBackground
    </div>
  )
}

export default VideoBackground
