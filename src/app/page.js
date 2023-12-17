import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Animation from "./components/Animation"
import Company from "./components/Company"
import Benefit from "./components/Benefit"
import AnotherHero from "./components/AnotherHero"
import MagicThree from "./components/MagicThree"
import Services from "./components/Services"
import AlternatingContentDiv from "./components/AlternatingContentDiv"
import Blog from "./components/Blog"
import Footer from "./components/Footer"
import HeroTwo from "./components/Hero"
import FooterTwo from "./components/Footer"
import AnotherPlayer from "./components/AnotherPlayer"
import FeedbackSlider from "./components/FeedbackSlider"
import CardGrid from "./components/CardGrid"

export default function Home() {
  return (
    <main className="bg-gray-100 z-100">
      <Navbar />
      {/* <Hero /> Have to change the image size */}
       <Animation />
        <Company /> 
        <AnotherPlayer />
        <Benefit /> 
       <CardGrid />
        <AnotherHero /> 
        <MagicThree />
        <Services />
        <FeedbackSlider />
       <AlternatingContentDiv />
         <Blog />
         {/* Here Our Hero section and Footer section need some change 
         cause they got blank space its could be solved by z-index or change the actual size
         of the components */}
      {/* <Footer />  */}
 </main>
  )
}
