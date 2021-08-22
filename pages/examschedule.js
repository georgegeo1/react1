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
                pageTitle="Πρόγραμμα Εξετάσεων" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Πρόγραμμα Εξετάσεων" 
            />  
            <br/><br/>
            <h3 align="center">Θα ανακοινωθεί σύντομα...</h3>
            <br/><br/>
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default G;