import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  
  const mainMovie = movies && movies.length > 0 ? movies[0] : null
  

  // Check if mainMovie exists before destructuring
  const {original_title, overview,id} = mainMovie || {};
  const movieId =id


  // Log original_title and overview to check their values
  // console.log("original_title:", original_title);
  // console.log("overview:", overview);


  return (
    <div>
      {mainMovie ? (
        <>
         
          <VideoTitle 
            title={typeof original_title === "object" ? JSON.stringify(original_title) : original_title} 
            overview={typeof overview === "object" ? JSON.stringify(overview) : overview} 
          />
          <VideoBackground movieId={movieId}/>
        </>
      ) : (
        <p>No movie available</p>
      )}
    </div>
  )
}

export default MainContainer
