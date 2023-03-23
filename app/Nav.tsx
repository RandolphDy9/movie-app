export default function Nav() {
  return (
    <nav>
      <ul className="my-4 flex flex-col gap-4 text-center lg:flex-row lg:gap-16 lg:text-left lg:mx-4">
        <li className="font-bold text-xl">SINE.TV</li>
        <li className="hover:scale-110"><a href="#Trending">Trending</a></li>
        <li className="hover:scale-110"><a href="#Popular">Popular</a></li>
        <li className="hover:scale-110"><a href="#Top-rated">Top Rated</a></li>
      </ul>
    </nav>
  )
}