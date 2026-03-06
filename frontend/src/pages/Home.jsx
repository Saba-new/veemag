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
      {/* TrustedBy - Shows partner logos. Add logos to public/logos/ or comment out this line */}
      <TrustedBy />
      <AILabSection />
      
      <AboutSection />
    </>
  )
}

export default Home
