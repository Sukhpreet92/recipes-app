import Image from "next/image";
import picture from "../public/laure-noverraz-gujFRz2nHVY-unsplash.jpg";
export default function Veggie() {
  return (
    <>
      <h1>Hello my Veggie Try</h1>
      <p> Hope it works greeny</p>
      <Image
        src={picture}
        alt="pizza"
        layout="responsive"
        width={2400}
        height={1599}
      ></Image>
    </>
  );
}
