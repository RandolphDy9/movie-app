import Image from 'next/image';

export default function Movie({ id, title, poster_path }: any) {
  const imageUrl = 'https://image.tmdb.org/t/p/original';
  return (
    <div className="mt-2" key={id}>
      <Image
        src={imageUrl + poster_path}
        height={300}
        width={300}
        alt="movie-image"
      />
      <div className="mt-3 text-xl font-bold">{ title }</div>
    </div>
  )
}