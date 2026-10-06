"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(
    ScrollTrigger,
    SplitText,
    Flip,
    DrawSVGPlugin,
    ScrambleTextPlugin,
    CustomEase,
    useGSAP
  );

  CustomEase.create("inkPress", "0.77,0,0.18,1");
  CustomEase.create(
    "stamp",
    "M0,0 C0.2,0 0.3,1.25 0.55,1.1 0.75,0.98 0.85,1 1,1"
  );

  gsap.defaults({ ease: "inkPress", duration: 0.9 });
}

export {
  gsap,
  ScrollTrigger,
  SplitText,
  Flip,
  DrawSVGPlugin,
  ScrambleTextPlugin,
  CustomEase,
  useGSAP,
};
