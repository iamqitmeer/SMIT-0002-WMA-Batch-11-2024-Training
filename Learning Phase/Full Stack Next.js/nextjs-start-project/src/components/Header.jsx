import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="bg-zinc-950 w-full h-20 flex items-center justify-center gap-4">
      <Link href="/">
        <button className="text-white text-xl font-bold hover:bg-white hover:text-black p-2 px-3 rounded-lg">
          Home
        </button>
      </Link>
      <Link href="/about">
        <button className="text-white text-xl font-bold hover:bg-white hover:text-black p-2 px-3 rounded-lg">
          About
        </button>
      </Link>
      <Link href="/recipes">
        <button className="text-white text-xl font-bold hover:bg-white hover:text-black p-2 px-3 rounded-lg">
          Recipes
        </button>
      </Link>
      <Link href="/contactus">
        <button className="text-white text-xl font-bold hover:bg-white hover:text-black p-2 px-3 rounded-lg">
          Contact Us
        </button>
      </Link>
    </div>
  );
}

export default Header;
