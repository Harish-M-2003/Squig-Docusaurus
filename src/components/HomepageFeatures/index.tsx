"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect"
// @ts-ignore
import Background from "../../../static/img/bg.jpg";
import { HoverEffect } from "../ui/hover-cards";
import Editor from '@monaco-editor/react';
import { useState } from "react";
import axios from "axios";
// import HomepageFeatures from "../HomepageFeatures";

export default function Home() {

  const [sourceProgram, setSourceProgram] = useState("");
  const [output, setOutput] = useState("");
  const [disableRunBtn , setDisableRunBtn] = useState(false);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const features = [
    {
      title: "Introduction",
      description:
        "Dive into Squig: Where Syntax Unleashes Infinite Potential.",
      link: "/docs/intro",
    },
    {
      title: "Getting Started",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "/docs/category/getting-started",
    },
    {
      title: "Installation",
      description: "Get Squig Up and Running in No Time.",
      link: "/docs/getting-started/installation",
    },
    {
      title: "Basics",
      description: "Master the Fundamentals: Dive Into Squig's Core Concepts.",
      link: "/docs/category/basics",
    },
    // {
    //   title: "Object Oriented Programming",
    //   description: "Elevate Your Code: Harness the Power of Objects in Squig.",
    //   link: "/docs/category/oops",
    // },
    {
      title: "Developer Documentation",
      description:
        "Unveil the Secrets: Dive Deep into Squig's Developer Documentation.",
      link: "/docs/category/developer-docs",
    },
  ];

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  function handleEditorChange(value: string, event: any) {
    setSourceProgram(value)
  }

  async function runCode() {
    // console.log(sourceProgram)
    setDisableRunBtn(() => true);
    const result = await axios.post("https://HarishM2003.pythonanywhere.com/playground", { code: sourceProgram });
    // console.log(result.data)
    setDisableRunBtn(() => false)

    setOutput(result.data.output)
  }

  return (
    <div className="">
      {/* <HomepageFeatures/> */}
      <div
        className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
        ref={ref}
      >
        <img
          src={Background}
          className="fixed top-0  max-md:hidden bottom-0 blur-sm"
        />
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          title="SQUIG"
          className="h-screen z-1"
          description="Crafting tomorrow's code with redefined syntax: Enter the world of Squig."
        // description="Unleash Your Code's Potential: Squig - Where Syntax Meets Innovation."
        />

      </div>
      <div className="h-screen py-10 backdrop-blur bg-transparent">
        {/* <div className="flex justify-center text-6xl">
        <p>About</p>
      </div> */}
        <HoverEffect items={features} />
      </div>
      <div className="h-screen p-10 px-20 w-screen relative md:block hidden">
        <div className="flex">

          <Editor height="80vh" theme="vs-dark" defaultValue="# Type Your Code Here" onChange={handleEditorChange} />

          <div className="bg-[#1e1e1e] w-full p-5">
            <p >{output}</p>
          </div>
        </div>
        <div className="w-full flex justify-end mt-5">
          <button className="p-2 px-10 rounded m-2 bg-gradient-to-r from-blue-700 to-blue-500" disabled={disableRunBtn} onClick={runCode}>Run</button>
        </div>

      </div>
      <div className="text-center p-6">
        <p className="text-white">Made By Harish M.</p>
      </div>
    </div>
  );
}