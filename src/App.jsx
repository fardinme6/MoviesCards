import Header from "./Header.jsx";
import MovieCard from "./movieCard.jsx";
import Footer from "./Footer.jsx";
import { useState } from "react";
export default function App() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [country, setCountry] = useState("All");
  const [releaseDate, setReleaseDate] = useState("All");
  const movies = [
    {
      id: 1,
      image: "/greenmile.jpg",
      title: "The Green Mile",
      releaseDate: 1999,
      genre: "Fantasy/Crime",
      country: "United States of America 🇺🇸",
      rate: 8.6,
      movieURL: "https://movie.af/fa/video/ldjic8"
    },
    {
      id: 2,
      image: "/shawshank.jpg",
      title: "The Shawshank Redemption",
      releaseDate: 1994,
      genre: "Drama/Crime",
      country: "United States of America 🇺🇸",
      rate: 9.3,
      movieURL: "https://movie.af/fa/video/nhyqef"
    },
    {
      id: 3,
      image: "/12thfail.jpg",
      title: "12th Fail",
      releaseDate: 2023,
      genre: "Drama",
      country: "India 🇮🇳",
      rate: 8.7,
      movieURL: "https://movie.af/fa/video/nyudsc"
    },
    {
      id: 4,
      image: "/vidaamuyarchi.jpg",
      title: "Vidaamuyarchi",
      releaseDate: 2025,
      genre: "Action/Thriller",
      country: "India 🇮🇳",
      rate: 6.2,
      movieURL:"https://movie.af/fa/video/we2a4l"
    },
    {
      id: 5,
      image: "/cat.jpg",
      title: "The Year of Cat",
      releaseDate: 2024,
      genre: "Comedy",
      country: "Iran 🇮🇷",
      rate: 3.3,
      movieURL:"https://movie.af/fa/video/jt4xtr"
    },
    {
      id: 6,
      image: "/kiterunner.jpg",
      title: "The Kite Runner",
      releaseDate: 2007,
      genre: "Drama/Melodrama",
      country: "Afghanistan 🇦🇫",
      rate: 7.5,
      movieURL:"https://movie.af/fa/video/jxgyme"
    },
    {
      id: 7,
      image: "/dunki.jpg",
      title: "Dunki",
      releaseDate: 2023,
      genre: "Adventure/Comedy",
      country: "India 🇮🇳",
      rate: 6.5,
      movieURL:"https://movie.af/fa/video/hgsby2"
    },
    {
      id: 8,
      image: "/pk.jpg",
      title: "PK",
      releaseDate: 2014,
      genre: "Comedy",
      country: "India 🇮🇳",
      rate: 8.1,
      movieURL:"https://movie.af/fa/video/wtjhin"
    },
    {
      id: 9,
      image: "/covenant.jpg",
      title: "Guy Ritchie's The Covenant",
      releaseDate: 2023,
      genre: "War/Action",
      country: "United States of America 🇺🇸",
      rate: 7.5,
      movieURL:"https://movieland.af/watch/mo/i3mxai"
    },
    {
      id: 10,
      image: "/thencameyou.jpg",
      title: "Then Came You",
      releaseDate: 2020,
      genre: "Romance/Comedy ",
      country: "United States of America 🇺🇸",
      rate: 6,
      movieURL:"https://movie.af/fa/video/aiarts"
    },
    {
      id: 11,
      image: "/dangal.jpg",
      title: "Dangal",
      releaseDate: 2016,
      genre: "Sport/Action ",
      country: "India 🇮🇳",
      rate: 8.3,
      movieURL:"https://movie.af/fa/video/sp9979"
    },
    {
      id: 12,
      image: "/masteshq.jpg",
      title: "Intoxicated by Love(مست عشق)",
      releaseDate: 2024,
      genre: "Romance/Drama ",
      country: "Iran 🇮🇷",
      rate: 3,
      movieURL:"https://movie.af/fa/video/3goi85"
    },
  ];
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      (genre === "All" || movie.genre.includes(genre)) &&
      (country === "All" || movie.country.includes(country)) &&
      (releaseDate === "All" || String(movie.releaseDate) === releaseDate),
  );

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex justify-center w-[93%] mx-auto flex-wrap gap-3 p-4 bg-yellow-600 rounded-lg sm:w-1/2 lg:w-1/2">
        <input
          value={search}
          type="text"
          placeholder="Search Movie..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg p-3 bg-black text-white sm:w-[30%] lg:w-[-30%]"
        />
        <select
          value={genre}
          className="rounded-lg p-3 bg-black text-white flex-1"
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="All">All Genres</option>
          <option value="Drama">Drama</option>
          <option value="Crime">Crime</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Adventure">Adventure</option>
          <option value="War">War</option>
        </select>
        <select
          value={country}
          className="rounded-lg p-3 bg-black text-white flex-1"
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="All">All Countries</option>
          <option value="United States of America">USA</option>
          <option value="India">India</option>
          <option value="Iran">Iran</option>
          <option value="Afghanistan">Afghanistan</option>
        </select>
        <select
          className="rounded-lg p-3 bg-black text-white flex-1"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        >
          <option value="All">All Years</option>
          {Array.from(
            { length: 2026 - 1990 + 1 },
            (_, index) => 1990 + index,
          ).map((releaseDate) => (
            <option key={releaseDate} value={releaseDate}>
              {releaseDate}
            </option>
          ))}
        </select>
        <img
          src="/reset.png"
          onClick={() => {
            setSearch("");
            setGenre("All");
            setCountry("All");
            setReleaseDate("All");
          }}
          className="w-10 h-15 object-contain flex-1 cursor-pointer"
        />
      </div>
      {filteredMovies.length === 0 ? (
        <div className="min-h-[350px] flex flex-col items-center justify-center p-10 text-white sm:min-h-[400px] md:min-h-[500px]">
          <h2 className="text-3xl font-bold mb-4">Not Found!</h2>
          <h2 className="text-3xl font-bold mb-4">Any Movie with This Info</h2>
          <button
            onClick={() => {
              setSearch("");
              setGenre("All");
              setCountry("All");
              setReleaseDate("All");
            }}
            className="rounded-lg bg-yellow-600 p-4 text-black cursor-pointer hover:bg-yellow-500"
          >
            Show All Movies
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 p-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              imageUrl={movie.image}
              filmName={movie.title}
              releaseDate={movie.releaseDate}
              genre={movie.genre}
              country={movie.country}
              rate={movie.rate}
              movieURL={movie.movieURL}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}
