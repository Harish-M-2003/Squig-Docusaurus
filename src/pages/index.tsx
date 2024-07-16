"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect";
// @ts-ignore
import Background from "../../static/img/bg.jpg";
import { HoverEffect } from "../components/ui/hover-cards";
import HomepageFeatures from "../components/HomepageFeatures";
import { Vortex } from "../components/ui/NoiseEffect";
import "./index.module.css"
import { FaGithub } from "react-icons/fa";


export default function Home() {

  // const [particleColor , setParticleColor] = React.useState(0);

  const ref = React.useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });

  // setInterval(() => setParticleColor(particleColor + 20) , 100)


  // const features = [
  //   {
  //     title: "Introduction",
  //     description:
  //       "Dive into Squig: Where Syntax Unleashes Infinite Potential.",
  //     link: "/docs/intro",
  //   },
  //   {
  //     title: "Getting Started",
  //     description:
  //       "A technology company that builds economic infrastructure for the internet.",
  //     link: "/docs/category/getting-started",
  //   },
  //   {
  //     title: "Installation",
  //     description: "Get Squig Up and Running in No Time.",
  //     link: "/docs/getting-started/installation",
  //   },
  //   {
  //     title: "Basics",
  //     description: "Master the Fundamentals: Dive Into Squig's Core Concepts.",
  //     link: "/docs/category/basics",
  //   },
  //   // {
  //   //   title: "Object Oriented Programming",
  //   //   description: "Elevate Your Code: Harness the Power of Objects in Squig.",
  //   //   link: "/docs/category/oops",
  //   // },
  //   {
  //     title: "Developer Documentation",
  //     description:
  //       "Unveil the Secrets: Dive Deep into Squig's Developer Documentation.",
  //     link: "/docs/category/developer-docs",
  //   },
  // ];

  // const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  // const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  // const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  // const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  // const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div className="h-screen w-screen">
      
      <div className="absolute left-0 right-0 flex justify-end text-gray-500 p-5 z-10 hover:text-gray-600">
        <a href="https://github.com/Harish-M-2003/Squig">
          <FaGithub className="text-4xl" />    
        </a>
      </div>
      <HomepageFeatures/>
    </div>
  );
}
