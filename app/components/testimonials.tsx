"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
function Testimonials() {
  return (
    <div id="testimonials" className="mx-auto md:px-[1rem] px-[2rem] py-[2rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden ">
      <h2 className="max-w-6xl my-12 pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 font-sans">What our Clients Say!</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
export default Testimonials

const testimonials = [
  {
    quote:
      "Cleaner was on time, very professional and did a great job, we are very pleased with our clean, i will reach out again when we are ready for another clean, Thank you!",
    name: "Alexandra Chantal", 
    // title: "A Tale of Two Cities",
    value: 4.5,
  },
  {
    quote:
      "I was very happy with the cleaning today and will continue on a biweekly basis going forward! Thank you!",
    name: "Teena Molson",
    // title: "The Great Gatsby",
    value: 5,
  },
  {
    quote: "I am very pleased with the clean! and i would like to schedule regular cleans",
    name: "Edgar Allan Poe",
    // title: "A Dream Within a Dream",
    value: 5,
  },
  {
    quote:
      "It was good! a nice deep clean of the needed areas.",
    name: "Max Bogen",
    // title: "Pride and Prejudice",
    value: 4,
  },
];
