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
                pageTitle="Σημειώσεις" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Σημειώσεις" 
            />  
            <br/><br/>
        <div class="card" align="center">
            <br/><br/>
            <h3>Συστήματα Αυτομάτου Ελέγχου (ΣΑΕ) – Εργαστήριο</h3><br/>
            <a href='/downloads/praktiko-ekswfyllo.docx' download>Εξώφυλλο Πρακτικού</a>
            <br/><br/><a href='/downloads/sae-1-askisi-1-ews-5.docx' download>ΣΑΕ Ι – Άσκηση #1 έως #5</a>
            <br/><br/><a href='/downloads/sae-1-askisi-2.pdf' download>ΣΑΕ Ι – Άσκηση #2</a>
            <br/><br/><a href='/downloads/sae-1-askisi-3.pdf' download>ΣΑΕ Ι – Άσκηση #3</a>
            <br/><br/><a href='/downloads/ask-4.pdf' download>ΣΑΕ Ι – Άσκηση #4</a>
            <br/><br/><a href='/downloads/askisi-5.pdf' download>ΣΑΕ Ι – Άσκηση #5</a>
            <br/><br/><a href='/downloads/askisi-6.pdf' download>ΣΑΕ Ι – Άσκηση #6</a>
            <br/><br/><a href='/downloads/askisi-7.pdf' download>ΣΑΕ Ι – Άσκηση #7</a>
            <br/><br/><a href='/downloads/askisi-8.pdf' download>ΣΑΕ Ι – Άσκηση #8</a>
            <br/><br/><a href='/downloads/askisi-9.pdf' download>ΣΑΕ Ι – Άσκηση #9</a>
            <br/><br/><a href='/downloads/askisi-10.pdf' download>ΣΑΕ Ι – Άσκηση #10</a>
            <br/><br/><p>Από το πρόγραμμα ΕΥΔΟΞΟΣ του Υπουργείου Παιδείας μπορείτε να επιλέξετε ένα από τα ακόλουθα συγγράμματα:</p>
            <br/> <a href='https://service.eudoxus.gr/search/#a/id:18548956/0'>MATLAB για Επιστήμονες και Μηχανικούς</a>
            <br/>
        </div>

        <br/><br/>

        <div class="card" align="center">
            <br/>
            <h3>Βιομηχανικοί Αυτοματισμοί – Εργαστήριο (Επιλογής)</h3><br/>
            <a href='/downloads/biomixanikoi-aytomatismoi-simeiwseis.docx' download>Σημειώσεις – Βιομηχ. Αυτοματισμοί</a>
            <br/><p>Από το πρόγραμμα ΕΥΔΟΞΟΣ μπορείτε να επιλέξετε ένα από τα ακόλουθα συγγράμματα:<li><a href='https://service.eudoxus.gr/search/#a/id:18549077/0'>Ηλεκτρικές μηχανές ac-dc, Chapman Stephen J</a></li><li><a href='https://service.eudoxus.gr/search/#a/id:18548905/0'>Ηλεκτρικές Μηχανές, Μαλατέστας Π.</a></li><li><a href='https://service.eudoxus.gr/search/#a/id:13769/0'>ΗΛΕΚΤΡΙΚΑ ΚΙΝΗΤΗΡΙΑ ΣΥΣΤΗΜΑΤΑ: ΜΟΝΤΕΛΟΠΟΙΗΣΗ, ΑΝΑΛΥΣΗ, ΚΑΙ ΕΛΕΓΧΟΣ, RAMU KRISHNAN</a></li><li><a href='https://service.eudoxus.gr/search/#a/id:22973/0'>Πνευματικοί αυτοματισμοί, Γιαννακόπουλος Κωνσταντίνος Ε.</a></li></p>
            <br/> <a href='https://service.eudoxus.gr/search/#a/id:18548956/0'>MATLAB για Επιστήμονες και Μηχανικούς</a>
            <br/>
        </div>

        <br/><br/>

        <div class="card" align="center">
            <br/>
            <h5>Αυτοματισμοί με Προγραμματιζόμενους ελεγκτές PLC</h5><br/>
            <h5>Εφαρμογές Συστημάτων Αυτομάτου Έλεγχου </h5><br/>
            <br/>
        </div>

        <br/><br/>
      
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default G;