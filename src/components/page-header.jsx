import React from 'react'
import Head from 'next/head'
/**
 * Page Header Component
 * Will return a react functional component
 * It will be used more often in the application
 * To avoid redundancy, we created the page Header component
 * This component will return the header of the page, plus added children if passed
 * ex. of children: Icons, meta tags etc.
 *
 * @param {title} string - The title of the web page
 * @param {children} React.FC - Functional component
 * @returns React.FC - Functional component representing the header
 */
const PageHeader = ({ title, children }) => (
    <Head>
        <title>
            {title}
        </title>
        {children}
    </Head>
)

export { PageHeader }
