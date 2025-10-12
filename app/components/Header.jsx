"use client";
import Navbar from "../components/Navbar";
import cleaner from "../assets/cleaner2-removebg.png";
import Image from "next/image";
import ring from "../assets/ring.png";
import { BiPlayCircle } from "react-icons/bi";
import { CountUp } from "countup.js";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { Rating } from "@mui/material";
import { motion } from "framer-motion";
import TypingEffect from "./ui/TypeEffect";
import { ScrollParallax } from "react-just-parallax";

const Header = () => {
  const count_up_ref_1 = useRef(null);
  const count_up_ref_2 = useRef(null);
  const parallaxRef = useRef(null);

  // CountUp effect for numbers
  useEffect(() => {
    const count_up_1 = new CountUp(count_up_ref_1.current, 1200, {
      duration: 3,
    });
    const count_up_2 = new CountUp(count_up_ref_2.current, 4, {
      duration: 3,
    });
    if (!count_up_1.error && !count_up_2.error) {
      count_up_1.start();
      count_up_2.start();
    } else {
      console.error(count_up_1.error, count_up_2.error);
    }
  }, []);

  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imgVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  
  return (
    <div className="w-full bg-[#fdf7f3]" id="home">
      <div className="max-w-6xl mx-auto container px-[2rem] md:px-[1rem]">
        <Navbar />
        <section className="mt-[4rem] md:mt-[3rem] flex flex-col items-center lg:flex-row md:gap-y-0 gap-y-[2.2rem] px-3 md:px-8 lg:px-6 xl:px-1">
          <motion.div
            className="relative text-part overflow-hidden flex-1 flex flex-col justify-center items-start space-y-6 md:space-y-4 !-translate-y-7"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            <motion.h1 className="text-3xl" variants={textVariant}>
              Your TODO-LIST:
            </motion.h1>

            <div>
              <motion.h1
                className="text-4xl font-semibold line-through text-gray-700"
                variants={textVariant}
              >
                Clean up.
              </motion.h1>
              <motion.h1
                className="text-4xl font-bold mt-1"
                variants={textVariant}
              >
                <TypingEffect />
              </motion.h1>
            </div>

            <motion.p className="text-lg -translate-3" variants={textVariant}>
              Leave the cleaning to us. At Maple Leaf Cleaners, we provide
              thorough, reliable cleaning services so you can enjoy a pristine home without the
              hassle.
            </motion.p>

            <motion.div
              className="flex gap-5 mb-8 items-center z-10"
              variants={textVariant}
            >
              <Link href={"#booknow"}>
                <motion.button
                  className="px-4 py-2 bg-yellow-400 text-white rounded-s-xl rounded-e-xl rounded-tl-none font-bold hover:scale-105 relative left-[2.1px] flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  Get a Free Quote
                  <FaLocationArrow />
                </motion.button>
              </Link>
              <Link href={"#testimonials"}>
                <motion.button
                  className="flex items-center gap-2 scale-105"
                  whileHover={{ scale: 1.1 }}
                >
                  <BiPlayCircle className="transitionext-slate-800" />{" "}
                  Testimonials
                </motion.button>
              </Link>
            </motion.div>

            <motion.div className="flex" variants={textVariant}>
              <div className="border-r border-gray-400 pr-12">
                <span className="text-4xl text-blue-800" ref={count_up_ref_1}>
                  0
                </span>
                <span className="text-4xl text-blue-800">+</span>
                <p className="text-base">Happy Customers</p>
              </div>
              <div className="pl-11">
                <span className="text-4xl text-blue-800" ref={count_up_ref_2}>
                  0
                </span>
                <span className="text-4xl text-blue-800">+</span>
                <p className="text-base">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="img-part flex-1 relative z-10"
            initial="hidden"
            animate="visible"
            variants={imgVariant}
            ref={parallaxRef}
          >
            {/* Ring Image */}
            <motion.div className="absolute inset-0 flex justify-center items-center z-[-5] w-full h-full">
              <Image
                src={ring}
                className=" w-[80%] h-[80%] sm:w-[60%] sm:h-[60%] bgring"
                alt="Ring"
                layout="fill"
                objectFit="contain"
              />
            </motion.div>

            <ScrollParallax
              strength={0.1}
              lerpEase={0.1}
              className="!z-50 fixed"
              isAbsolutelyPositioned
              style={{ zIndex: 1000 }}
            >
              <motion.div
                className={`flex items-center p-2 pr-6 bg-yellow-100/60 backdrop-blur-sm border-n-1/10 rounded-2xl gap-5 absolute top-3 lg:top-11 right-4 w-60 sm:w-64 md:w-[18rem] lg:w-[19.5rem] h-[6rem] lg:h-[5rem] !z-50`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex-1 ">
                  <h6 className="mb-1 font-bold text-sm md:text-base text-black">
                    Satisfaction Guaranteed!
                  </h6>
                  <div className="flex items-center justify-between">
                    <ul className="flex m-0.5">
                      <Rating
                        name="half-rating"
                        defaultValue={5}
                        precision={0.5}
                        readOnly
                      />
                    </ul>
                  </div>
                </div>
              </motion.div>
            </ScrollParallax>

            {/* Cleaner Image */}
            <motion.div variants={imgVariant}>
              <Image
                className="relative z-[-2]"
                src={cleaner}
                width={600}
                height={600}
                alt="Cleaner"
              />
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Header;