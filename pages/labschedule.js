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
                pageTitle="Πρόγραμμα" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Πρόγραμμα" 
            />  
            <br/><br/>
            <div className="card">
                <img src="/images/schedule.png" alt="image" />
            </div>   
      
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default G;