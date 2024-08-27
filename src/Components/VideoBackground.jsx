import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants"




const VideoBackground = (movieId) => {
  let id=movieId.movieId
  
  const getMovieVideos = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json); 
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
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
