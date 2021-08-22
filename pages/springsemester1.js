import React from 'react';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import SubscribeForm from '../components/Common/SubscribeForm';
// import Footer from '../components/_App/Footer';
import Lightbox from 'react-image-lightbox';
import Link from 'next/link';

const G = () => {

    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner 
                pageTitle="Συστήματα Αυτομάτου Ελέγχου Εργαστήριο" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Συστήματα Αυτομάτου Ελέγχου Εργαστήριο" 
            />  
            <br/><br/>
            <h3 align="center">Συστήματα Αυτομάτου Ελέγχου Εργαστήριο</h3>
            <br/><br/>
      
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default G;