import React from 'react';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
// import Footer from '../components/_App/Footer';
import Lightbox from 'react-image-lightbox';
import Link from 'next/link';


const G = () => {

    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner 
                pageTitle="Συνέδρια" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Συνέδρια" 
            />  
            <br/><br/>
            <h3>Συνέδρια</h3><br/>
            <br/><br/>
            
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default G;