import { useState } from "react";
export default function MovieCard({
  filmName,
  releaseDate,
  genre,
  country,
  rate,
  imageUrl,
}) {
  const [isAdded, setIsAdded] = useState(false);
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
      <button
        className={`w-full mt-auto p-3 rounded-xl cursor-pointer ${isAdded ? "bg-white text-black": "bg-black text-white hover:bg-white hover:text-black"} `}
        onClick={() => setIsAdded(true)}
      >
        {isAdded ? "Added✅" : "Add to Waitlist"}
      </button>
    </div>
  );
}
