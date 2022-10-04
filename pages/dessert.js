import Image from "next/image";
//import picture from "https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400";

export default function Dessert() {
  return (
    <>
      <h1>Hello my Dessert Try</h1>
      <p> Hope it works yummy</p>
      <Image
        src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
        alt="pizza"
        layout="responsive"
        width={2400}
        height={1599}
      />
    </>
  );
}
