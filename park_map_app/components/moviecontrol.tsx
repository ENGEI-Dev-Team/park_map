export const MovieControl = () => {

return (
<div className="w-full overflow-hidden shadow-lg mb-8" style={{ maxHeight: "70vh" }}>
        <video
          src="/park_movie/parkMovie.MOV"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>

)}

