export default function MovieCard({
  filmName,
  releaseDate,
  genre,
  country,
  rate,
  imageUrl,
  movieURL,
}) {
  return (
    <div className="flex flex-col h-full p-4 bg-yellow-600 rounded-lg shadow-lg w-full  font-serif">
      <img
        className="rounded-lg object-cover w-full h-full mb-5"
        src={imageUrl}
        alt={filmName}
      />
      <h2 className="text-xl font-bold text-black mb-5">{filmName}</h2>
      <p className="text-gray-800 font-bold mb-1">
        Release Date: {releaseDate}
      </p>
      <p className="text-gray-800 font-bold mb-1">Genre: {genre}</p>
      <p className="text-gray-800 font-bold mb-1">Country: {country}</p>
      <p className="text-gray-800 font-bold mb-3">Rating: {rate}</p>
      <a
        href={movieURL}
        target="_blank"
        className={`w-full text-center p-3 rounded-xl cursor-pointer bg-black text-white text-xl hover:bg-white hover:text-black`}
        onClick={() => movieURL()}
      >
        Watch
      </a>
    </div>
  );
}
