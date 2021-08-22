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
                pageTitle="Έντυπα" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Έντυπα" 
            />  
            <br/><br/>
        <div class="card" align="center">
            <br/><br/>
            <h3>Ατήσεις – Έντυπα</h3><br/>
            <a href='/downloads/dilwsi-analipsi-pe.docx' download>Αίτηση Ανάληψης Πτυχιακής</a>
            <br/><br/><a href='/downloads/aitisi-eksetasis-ptixiakis.docx' download>Αίτηση Εξέτασης Πτυχιακής</a>
            <br/><br/><a href='/downloads/aitisi-enarsi-praktikis-espa.docx' download>Αίτηση έναρξης πρακτικής άσκησης – ΕΣΠΑ</a>
            <br/><br/><a href='/downloads/aitisi-enarksi-praktikis-oaed.docx' download>Αίτηση έναρξης πρακτικής άσκησης – ΟΑΕΔ </a>
            <br/><br/><a href='/downloads/aitisi-oloklirwsis-pa.docx' download>Αίτηση ολοκλήρωσης πρακτικής άσκησης</a>
            <br/><br/><a href='/downloads/enimerwitko-espa.pdf' download>Ενημερωτικό Έντυπο εργοδότη και φοιτητή – Πρακτική ΕΣΠΑ</a>
            <br/><br/><a href='/downloads/enimewtiko-oaed.pdf' download>Ενημερωτικό Έντυπο εργοδότη και φοιτητή – Πρακτική ΟΑΕΔ</a>
           <br/><br/>
        </div>

        <br/><br/>
      
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default G;