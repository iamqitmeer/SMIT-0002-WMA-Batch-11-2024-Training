import { Image } from "@nextui-org/react";
import React from "react";

function Hero() {
  return (
    <div className="h-[200px]">
      <Image
        height={550}
        width={2000}
        radius="none"
        alt="NextUI hero Image with delay"
        src="https://images.unsplash.com/photo-1501685532562-aa6846b14a0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="object-cover w-full h-full"
      />
      <div>
        <p>New Arrival</p>
        <h1>Discover Our  New Collection</h1>
      </div>
    </div>
  );
}

export default Hero;
