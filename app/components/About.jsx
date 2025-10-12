"use client";
import React, { useRef } from "react";
import { FeaturesSectionDemo } from "./ui/AboutCards";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { FaLocationArrow } from "react-icons/fa";
import { motion, useInView } from "framer-motion"; // Importing useInView
import { useToast } from "../hooks/use-toast";

const About = () => {
  const { toast } = useToast();
  const openTalkToChat = () => {
    if (window && window.Tawk_API) {
      try{
        window.Tawk_API.maximize(); // This opens the chat widget
      }
      catch(err){
        toast({
          title: "Please Check your Internet connection and try again",
          // description: `${formData.fullName}, Your appointment has been scheduled for ${formData.date} at ${formData.time}. We will be in touch with you shortly.`,
        });
      }
    }
  };

  // Create refs for the sections
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Define motion variants for fade-in and slide-up effects
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const accordionVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <div className="bg-white w-full h-auto  overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto py-14 md:py-[2rem] lg:py-[3.5rem] xl:py-[7rem] flex items-center">
        <div className="flex flex-col lg:flex-row w-full md:gap-[8rem] g px-2 xl:px-0 lg:px-[2.5rem] md:px-[2.5rem]">
          
          {/* Text part animation */}
          <motion.div
            className="textpart1 px-[1rem] space-y-5 flex-1"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Trigger only when in view
            variants={textVariant}
          >
            <div className="md:max-w-[25rem] space-y-4">
              <motion.button
                className="px-5 py-1 bg-gray-100 rounded-xl text-yellow-500 font-semibold"
                whileHover={{ scale: 1.1 }}
              >
                About Us
              </motion.button>
              <motion.h2 className="text-3xl">More than just a cleaning service</motion.h2>
              <div className="boxes grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FeaturesSectionDemo />
              </div>
            </div>
          </motion.div>

          {/* Accordion and button part animation */}
          <motion.div
            className="textpart2 flex-1 flex items-center justify-center md:px-0 px-[1rem]"
            ref={sectionRef} // Reference for in-view check
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Trigger only when in view
            variants={accordionVariant}
          >
            <div className="!w-full space-y-9">
              <motion.p className="mt-6" variants={textVariant}>
                For over 4 years, Maple Leaf Cleaners Plus has been providing
                top-notch cleaning services with a commitment to excellence. Our
                experienced professionals ensure that every job is completed
                with the highest standards of quality and care. We pride
                ourselves on our reliability and customer satisfaction.
              </motion.p>
              
              <motion.div className="accordian-part" variants={accordionVariant}>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      What services do you offer?
                    </AccordionTrigger>
                    <AccordionContent>
                      We offer a wide range of cleaning services including
                      residential, commercial, deep cleaning, and specialized
                      services such as carpet and upholstery cleaning.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      How do I book a service?
                    </AccordionTrigger>
                    <AccordionContent>
                      Booking a service is easy! You can use my online booking
                      system on my website or contact me directly via my Facebook Page
                      or email at{" "}
                      <a href="mailto:mapleleafcleanersplus@gmail.com">
                        mapleleafcleanersplus@gmail.com
                      </a>
                      .
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      How much does cleaning cost?
                    </AccordionTrigger>
                    <AccordionContent>
                      Costs vary based on size, frequency, and specific
                      requirements. For a customized quote, please contact our
                      team for details.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
                <button
  className="px-4 py-2 bg-yellow-400 hover:bg-yellow-400 hover:scale-105 text-white rounded-s-xl rounded-e-xl rounded-tl-none font-bold relative left-[2.1px] flex items-center justify-center gap-2 transition-transform duration-200"
  onClick={() => window.location.href = "mailto:mapleleafcleanersplus@gmail.com"}
>
  Email me
  <FaLocationArrow />
</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
