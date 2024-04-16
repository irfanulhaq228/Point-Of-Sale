import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import HomeInfo from '../HomeInfo/HomeInfo'

const Home = () => {
    return (
        <>
            <HomeInfo name='Home' secondName='Home' />
            <Dashboard />
        </>
    )
}

export default Home