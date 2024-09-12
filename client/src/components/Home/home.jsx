import React, { useEffect, useState } from 'react'
import Intro from "../Intro/Intro.jsx";
import AllSources from '../AllSources/AllSources.jsx';
import Footer from '../footer/bottom.jsx';
import Sourcesidebar from '../sidebar/Sourcesidebar.jsx';

const Home = () => {

  return (
    <div>
      <Intro />
      <Sourcesidebar />
      <AllSources />
      <Footer />
    </div>
  )
}

export default Home