"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect";
// @ts-ignore
import Background from "../../static/img/bg.jpg";
import { HoverEffect } from "../components/ui/hover-cards";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const features = [
    {
      title: "Introduction",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Getting Started",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Installation",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Basics",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Object Oriented Programming",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Developer Documentation",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
  ];

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div>
      
      <div
        className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
        ref={ref}
      >
      <img src={Background} className="fixed top-0 blur-sm"/>
      <div className="flex justify-between px-5 pt-5 z-10">
        <a target="_blank" className="text-white" href="/docs/intro">Docs</a>
        <div className="flex gap-5">

        <a target="_blank" href="https://github.com/Harish-M-2003/Squig" className="text-gray-200 hover:opacity-[0.5] hover:text-gray-200">

        <IoLogoGithub className="text-4xl"/>
        </a>
        <a target="_blank" href="https://github.com/Harish-M-2003/Squig" className="text-gray-200 hover:opacity-[0.5] hover:text-gray-200">

        <FaLinkedin className="text-4xl"/>
        </a>

        </div>
      </div>
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          title="Squig"
          description="Crafting tomorrow's code with redefined syntax: Enter the world of Squig."
        />
      </div>
      <div className="h-screen py-10 backdrop-blur bg-transparent">
        {/* <div className="flex justify-center text-6xl">
        <p>About</p>
      </div> */}
        <HoverEffect items={features} />
      </div>
      <div className="text-center">
         <p>Made By Harish M.</p>
      </div>
    </div>
  );
}
