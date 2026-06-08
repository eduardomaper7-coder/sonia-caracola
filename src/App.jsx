import { Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSonia from './components/AboutSonia'
import Treatments from './components/Treatments'
import WhyUs from './components/WhyUs'
import FeaturedBox from './components/FeaturedBox'
import HowWeWork from './components/HowWeWork'
import Testimonials from './components/Testimonials'
import BlogSection from './components/BlogSection'
import Location from './components/Location'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import AllTreatments from './components/AllTreatments'
import GallerySection from './components/GallerySection'

import Legal from './pages/Legal'
import BlogPost from './pages/BlogPost'

const Home = () => (
  <>
    <div className="relative">
      <Navbar />
      <Hero />
    </div>

    

    <Treatments />
    <WhyUs />
    <AboutSonia />
    <FeaturedBox />
    <GallerySection />
    <HowWeWork />
    <Testimonials />
    <BlogSection />
    <Location />
    <ContactSection />
    <Footer />
  </>
)

function App() {
  return (
    <main className="bg-white text-black">
      <ScrollToTop />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* TRATAMIENTOS */}
        <Route
          path="/tratamientos"
          element={
            <>
              <Navbar />
              <AllTreatments />
              <Footer />
            </>
          }
        />

        {/* BLOG */}
        <Route
          path="/blog/revitalizar-piel"
          element={
            <>
              <Navbar />
              <BlogPost />
              <Footer />
            </>
          }
        />

        {/* LEGAL */}
        <Route
          path="/legal"
          element={
            <>
              <Navbar />
              <Legal />
              <Footer />
            </>
          }
        />
      </Routes>
    </main>
  )
}

export default App