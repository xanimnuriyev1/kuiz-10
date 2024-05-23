import React from 'react'
import { Helmet } from "react-helmet";
import HomeFirst from './HomeFirst';
import HomeCenter from './HomeCenter';
import HomeEnd from './HomeEnd';
import HomeMap from './HomeMap';
const Home = () => {
  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <HomeFirst/>
      <HomeCenter/>
      <HomeEnd/>
      <HomeMap/>
    </section>
  )
}

export default Home
