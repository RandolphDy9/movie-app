import Movie from "./Movie";
import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const popular = await data.json();
  console.log(popular);

  const data2 = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`);
  const trending = await data2.json();
  console.log(trending);

  const data3 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`);
  const topRated = await data3.json();
  console.log(topRated);

  const imageUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <>
      <Nav />
      <main>
        <Jumbotron />
        <div className="m-16" id="Trending">
          <h3 className="text-2xl text-center lg:text-left font-bold">Trending Movies</h3>
          <div className="grid grid-cols-fluid">
            { trending.results.slice(0, 12).map((movie: any) => {
              return (
                <Movie 
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path} />
              )
            })}
          </div>
        </div>

        <section className="w-full my-4">
          <img
            src={imageUrl + trending.results[14].poster_path}
            className="w-full object-cover h-80"
            alt="Random movie section"
          />
        </section>

        <div className="m-16" id="Popular">
          <h3 className="text-2xl text-center lg:text-left font-bold">Popular Movies</h3>
          <div className="grid grid-cols-fluid">
            { popular.results.slice(0, 12).map((movie: any) => {
              return (
                <Movie 
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path} />
              )
            })}
          </div>
        </div>

        <section className="w-full my-4">
          <img
            src={imageUrl + popular.results[16].poster_path}
            className="w-full object-cover h-80"
            alt="Random movie section"
          />
        </section>

        <div className="m-16" id="Top-rated">
          <h3 className="text-2xl text-center lg:text-left font-bold">Top Rated Movies</h3>
          <div className="grid grid-cols-fluid">
            { topRated.results.slice(0, 12).map((movie: any) => {
              return (
                <Movie 
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path} />
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
