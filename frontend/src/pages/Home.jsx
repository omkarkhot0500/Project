import React from 'react'
import HeroSection from '../components/HomeComponents/HeroSection'
import AboutUs from '../components/HomeComponents/AboutUs'
import Form from '../components/HomeComponents/Form'
import OurEvents from '../components/HomeComponents/OurEvents'

const Home = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <section className="w-full">
        <HeroSection />
      </section>
      
      <section className="w-full py-8 md:py-12 lg:py-16">
        <AboutUs />
      </section>
      
      <section className="w-full py-10 md:py-16 lg:py-20">
        <OurEvents />
      </section>

      {/* <div className=" mt-28 h-[100vh]">
            <Departments />
        </div> */}
        {/* <div className="mt-10 h-[90vh]">  
            <OurTeam/>
        </div> */}
      
      <section className="w-full py-10 md:py-16 lg:py-20" id="form">
        <Form />
      </section>
    </div>
  )
}

export default Home