import Hero from '../components/Hero'
import FeaturesSection from '../components/FeaturesSection'
import AILabSection from '../components/AILabSection'
import TrustedBy from '../components/TrustedBy'
import AboutSection from '../components/AboutSection'

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
      {/* TrustedBy - Partner logos temporarily hidden until images are added to public/logos/ */}
      {/* <TrustedBy /> */}
      <AILabSection />
      
      <AboutSection />
    </>
  )
}

export default Home
