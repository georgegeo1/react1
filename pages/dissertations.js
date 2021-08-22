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
                pageTitle="Τρέχουσες Πτυχιακές (εξαμήνου)" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Τρέχουσες Πτυχιακές (εξαμήνου)" 
            />  
            <br/><br/>
            <h3 align="center">Ανάληψη πτυχιακών εργασιών στο εαρινό ακαδημαϊκό εξάμηνο 2014<br/>Επιβλέπων Καθηγητής: Χρήστος Κ. Μανάβης</h3><br/><br/>
                    <div className="card" align="center">
                        <img src="/images/dissertations.png" alt="image" align="center" width="800" height="600" />
                    </div>   
            <br/><br/>
           
      
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default G;