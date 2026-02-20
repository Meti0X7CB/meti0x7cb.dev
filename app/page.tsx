import Link from "next/link";
import React from "react";
import { Github, Twitter } from "lucide-react";
import Particles from "./components/particles";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        Meti0X7CB
      </h1>
      <div className="mt-8 flex items-center gap-8 text-zinc-500 animate-fade-in">
        <Link
          target="_blank"
          href="https://twitter.com/Meti0X7CB"
          aria-label="Twitter"
          className="duration-300 hover:text-zinc-200"
        >
          <Twitter className="w-6 h-6" />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/Meti0X7CB"
          aria-label="GitHub"
          className="duration-300 hover:text-zinc-200"
        >
          <Github className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
