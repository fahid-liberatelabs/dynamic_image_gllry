import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-[#FFF] py-5 shadow-md mb-5 sticky top-0 z-50">
      <div className="flex justify-between px-5">
        <div className="ml-16">
          <span className="text-[2rem] font-bold mx-1">
            <span className="font-serif ">D</span>ynamic
          </span>
          <span className="text-md font-bold mx-1 bg-[#EF5722] p-2 rounded-md">
            Gallery
          </span>
        </div>

        <div className="mr-28 flex justify-center items-center font-bold text-md">
          <ul className="flex gap-2">
            <Link href="https://docs.google.com/document/d/1Osjl1Emeuy88MczdnqtPumSiZvrKuctc4L87sfCIu6A/edit">
              <li className="border-2 p-2 rounded-md transition duration-150 ease-out hover:ease-in">
                Document
              </li>
            </Link>
            <Link href="https://github.com/fahid-liberatelabs/dynamic_image_gllry">
              <li className="border-2 p-2 rounded-md">Github Repo</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
