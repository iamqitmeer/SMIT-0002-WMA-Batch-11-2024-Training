import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="bg-zinc-950 w-full h-20 flex items-center justify-center gap-40">
      <Link href="/">
        <div className="text-zinc-100 font-bold text-3xl">Logo</div>
      </Link>
      <div>
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
        <Link href="/todos">
          <button className="text-white text-xl font-bold hover:bg-white hover:text-black p-2 px-3 rounded-lg">
            Todos
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
      <div>
        <Link href="/auth">
          <button className="bg-gray-50 hover:bg-gray-100 p-3 px-8 rounded-lg text-zinc-950 font-semibold">
            Register Yourself
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
