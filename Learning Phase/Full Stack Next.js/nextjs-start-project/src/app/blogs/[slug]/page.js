"use client";

import React from "react";

function BlogDetails({ params }) {
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

  const cricketer = cricketers.find(
    (cricketer) => cricketer.slug === params.slug
  );

  return (
    <div>
      {cricketer ? (
        <div>
          <h1>{cricketer.name}</h1>
          <p>Country: {cricketer.country}</p>
          <p>Role: {cricketer.role}</p>
          <p>Batting Style: {cricketer.battingStyle}</p>
          <p>Bowling Style: {cricketer.bowlingStyle}</p>
        </div>
      ) : (
        <p>Cricketer not found.</p>
      )}
    </div>
  );
}

export default BlogDetails;
