import Image from "next/image";
import TV from "./assets/tv.png";

export default function Jumbotron() {
  return (
    <div className="jumbotron my-16">
      <h1 className="flex justify-center p-4 mt-5 text-6xl font-bold">
        Sine <Image className="mx-4" width={'70'} height={50} src={TV} alt="" />
      </h1>
      <p className="flex justify-center">A collection of movie information.</p>
    </div>
  )
}