import React from 'react'
import Cabins from '../components/Cabins'
import Hero from '../components/Hero'
import Offers from '../components/Offers'
import Plan from '../components/Plan'

const Home = () => {
    return (
        <>
            <Hero />
            <Offers />
            <Plan />
            <Cabins />
        </>
    )
}

export default Home