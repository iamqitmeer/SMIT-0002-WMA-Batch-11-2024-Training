import Link from "next/link";
import React from "react";

function blogs() {
  const cricketers = [
    {
      name: "Babar Azam",
      slug: "babar-azam",
      country: "Pakistan",
      role: "Batsman",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm off-break",
    },
    {
      name: "Imran Khan",
      slug: "imran-khan",
      country: "Pakistan",
      role: "All-rounder",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm fast",
    },
    {
      name: "Wasim Akram",
      slug: "wasim-akram",
      country: "Pakistan",
      role: "Bowler",
      battingStyle: "Left-hand bat",
      bowlingStyle: "Left-arm fast",
    },

    {
      name: "Shaheen Afridi",
      slug: "shaheen-afridi",
      country: "Pakistan",
      role: "Bowler",
      battingStyle: "Left-hand bat",
      bowlingStyle: "Left-arm fast",
    },
    {
      name: "Shoaib Akhtar",
      slug: "shoaib-akhtar",
      country: "Pakistan",
      role: "Bowler",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm fast",
    },
    {
      name: "Shahid Afridi",
      slug: "shahid-afridi",
      country: "Pakistan",
      role: "All-rounder",
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm leg-spin",
    },
  ];
  return (
    <div className="flex items-center justify-center flex-col p-20 gap-4">
      {cricketers.map((cricketer) => {
        return (
          <div key={cricketer.slug}>
            <Link
              className="text-zinc-900 border-2 border-zinc-900 text-xl font-bold hover:bg-zinc-900 hover:text-white p-2 px-3 rounded-lg m-4"
              href={`/blogs/${cricketer.slug}`}
            >
              {cricketer.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default blogs;
