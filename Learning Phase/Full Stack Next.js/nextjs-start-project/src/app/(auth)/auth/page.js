import Link from "next/link";
import React from "react";

function Auth() {
  return (
    <div className="flex items-center justify-center gap-4 p-52">
      <Link href="/auth/login">
        <button className="bg-zinc-950 hover:bg-zinc-900 p-3 px-8 rounded-lg text-zinc-50 font-semibold">Login</button>
      </Link>
      <Link href="/auth/register">
        <button className="bg-zinc-950 hover:bg-zinc-900 p-3 px-8 rounded-lg text-zinc-50 font-semibold">Register</button>
      </Link>
    </div>
  );
}

export default Auth;
