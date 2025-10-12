"use client"
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Booking from "./components/Booking"
export default function Home() {

  return (
 
    <main className='h-auto bg-white overflow-hidden'>
      <div>
        <Header />
      </div>
      <About />
      <Services />
      <Testimonials />
      <Pricing />
      <Booking />
      <Footer />
    </main>
  );
}
