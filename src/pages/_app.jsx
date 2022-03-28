import '../styles/globals.css'
import React from 'react'
import { Navbar } from '../components'

const MyApp = ({ Component, pageProps }) => (
    <>
        <Navbar />
        <Component {...pageProps} />
    </>
)

export default MyApp
