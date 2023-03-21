import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const movies = await data.json();
  console.log(movies);

  return (
    <main>
      <h1 className="flex justify-center p-4 mt-5 text-6xl font-bold">
        Sine <img src="./tv.png" alt="" />
      </h1>
      <p className="flex justify-center">Know the latest released movies.</p>
      <div className="grid grid-cols-fluid m-10">
        { movies.results.map((movie: any) => {
          return (
            <Movie 
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path} />
          )
        })}
      </div>
    </main>
  )
}
