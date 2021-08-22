import React from 'react';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
// import Footer from '../components/_App/Footer';
import Link from 'next/link';


const s = () => {
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner 
                pageTitle="Εκπαιδευτικές Εκδρομές" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Εκπαιδευτικές Εκδρομές" 
            />  


        <br/><br/>

            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default s;