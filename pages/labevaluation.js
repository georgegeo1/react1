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
                pageTitle="Κανονισμός - Αξιολόγηση" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Κανονισμός - Αξιολόγηση" 
            />  
            <br/>
            <h3 align="center">Αξιολόγηση φοιτητών</h3>
            <p align="justify">Η βαθμολογική κλίμακα που χρησιμοποιείται για την αξιολόγηση της επίδοσης των φοιτητών είναι αυτή από μηδέν έως δέκα (0-10), με βάση επιτυχίας το βαθμό πέντε (5).</p>
            <br/>
            <p align="justify"><b>Ο χαρακτηρισμός της επίδοσης των φοιτητών καθορίζεται ως εξής:</b><li>από 0 – 3,9 : κακώς</li><li>από 4 – 4,9 : ανεπαρκώς</li><li>από 5 – 6,9 : καλώς</li><li>από 7 – 8,4 : λίαν καλώς</li><li>από 8,5 – 10 : άριστα</li></p>
            <br/>
            <h3 align="center">Προφίλ του Εργαστηρίου</h3>
            <br/>
            <p align="justify">Για την επιτυχή παρακολούθηση των εργαστηριακών μαθημάτων , απαιτείται ο φοιτητής να έχει πραγματοποιήσει με επιτυχία το 80% τουλάχιστον, των εργαστηριακών ασκήσεων που πραγματοποιήθηκαν κατά τη διάρκεια του εξαμήνου.</p>
            <br/> <p align="justify">Την τελευταία εβδομάδα του εξαμήνου διεξάγονται συμπληρωματικές εργαστηριακές ή πρακτικές ασκήσεις για όσους φοιτητές έχουν αποτύχει ή απουσιάσει και μπορούν να συμπληρώσουν να συμπληρώσουν 80% με μια αναπλήρωση.</p>
            <SubscribeForm />
      
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default G;