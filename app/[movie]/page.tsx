import Image from "next/image";
import Link from "next/link";

export default async function MovieDetails({ params }: any) {
  const { movie } = params;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const details = await data.json();
  console.log(details);
  console.log(params);
  const imageUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="w-100 min-h-screen p-10 flex flex-col lg:px-60">
      <div className="border-2 border-gray-50 rounded-xl p-10 shadow-md">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl">Movie Details</h1>
          <Link href="/" className="py-1 px-2 rounded-md bg-violet-500 hover:bg-gray-600">Back</Link>
        </div>
        <h6 className="mt-5 font-bold text-xl">{details.title}</h6>
        <p>Release Date: {details.release_date}</p>
        <p>Status: {details.status}</p>
        <p>Vote Average: {Math.ceil(details.vote_average)}/10</p>
        <Image
          className="my-4 mx-auto"
          width={300}
          height={300}
          src={imageUrl + details.poster_path}
          alt="Movie picture"
        />
        <p>{details.overview}</p>
      </div>
    </div>
  );
}
