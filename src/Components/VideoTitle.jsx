const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="">
        <button className="bg-gray-500 text-black px-18 w-28 text-xl rounded-lg py-3 bg-opacity-50" >▶ Play</button>
        <button  className="bg-gray-500 text-black px-18 w-28 text-xl rounded-lg py-3 bg-opacity-50 mx-2" >More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
