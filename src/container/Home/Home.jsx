import React from 'react'
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import Features from "../Features/Features"
import Reasons from "../Reasons/Reasons"
import Pricing from "../Pricing/Pricing"
import Testimonials from "../Testimonials/Testimonials"
import FAQs from "../FAQs/FAQs"
import Blog from "../Blog/Blog"
import '../../styles/animations.css'
import FadeInSection from '../../components/FadeInSection'  // new import

const Home = () => {
  return (
    <div>
      <FadeInSection>
        <Hero />
      </FadeInSection>
      <FadeInSection>
        <Features />
      </FadeInSection>
      <FadeInSection>
        <Reasons />
      </FadeInSection>
      <FadeInSection>
        <Pricing />
      </FadeInSection>
      <FadeInSection>
        <Testimonials />
      </FadeInSection>
      <FadeInSection>
        <FAQs />
      </FadeInSection>
      <FadeInSection>
        <Blog />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  )
}

export default Home
