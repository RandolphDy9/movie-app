import Image from 'next/image';
import Link from 'next/link';

export default function Movie({ id, title, poster_path }: any) {
  const imageUrl = 'https://image.tmdb.org/t/p/original';
  return (
    <div className="mt-4 hover:scale-110 duration-200" key={id}>
      <Link href={`/${id}`}>
        <Image
          src={imageUrl + poster_path}
          height={300}
          width={200}
          alt="movie-image"
        />
        <div className="mt-3 text-lg mr-4">{ title }</div>
      </Link>
    </div>
  )
}