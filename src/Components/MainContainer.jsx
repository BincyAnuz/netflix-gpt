import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  console.log(movies)
  const mainMovie = movies && movies.length > 0 ? movies[0] : null
  console.log(mainMovie)

  // Check if mainMovie exists before destructuring
  const {original_title, overview} = mainMovie || {};
  const movieId = mainMovie ? mainMovie.Id : null;

  // Log original_title and overview to check their values
  console.log("original_title:", original_title);
  console.log("overview:", overview);


  return (
    <div>
      {mainMovie ? (
        <>
          {/* If original_title or overview are objects, convert them to a string */}
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
