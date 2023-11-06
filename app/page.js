import Gallery from "@/components/gallery/Gallery";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar></Navbar>
      <Gallery></Gallery>
    </main>
  );
}
