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
                pageTitle="Εφαρμογές Συστημάτων Αυτομάτου Έλεγχου" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Εφαρμογές Συστημάτων Αυτομάτου Έλεγχου" 
            />  
            <br/><br/>
            <p align="justify">Σκοπός του μαθήματος είναι η δημιουργία του βασικού υπόβαθρου για την κατανόηση της ευρείας επιστημονικής περιοχής των Συστημάτων Αυτόματου Ελέγχου (Σ.Α.Ε.) καθώς και της εφαρμογής σε μονάδες κατασκευής. Ο φοιτητής θα έχει την ευκαιρία με κλασικές τεχνικές σχεδίασης να κατασκευάσει πρωτότυπες μονάδες παραγωγής σε διάφορους τομείς της βιομηχανίας</p>
            <br/><br/> <h3 align="center">Περίγραμμα εργαστηρίου</h3><br/>
            <p align="justify">Έλεγχος ταχύτητας D.C. κινητήρα, ανοικτού και κλειστού βρόχου χωρίς φορτίο & με φορτίο.- Έλεγχος σερβομηχανισμού θέσης.- Σύστημα ελέγχου στάθμης υγρών. -Σύστημα ελέγχου ροής δύο υγρών.- Παραδείγματα και εφαρμογές (Έλεγχος μίξης υγρών – θερμοκρασίας φούρνου)-Σύστημα ελέγχου σφαίρας Ball and Beam-Σύστημα Ελέγχου Ψηφιακού Εκκρεμούς (Inverted Pendulum) με Η/Υ- Αναλογικός έλεγχος συστημάτων: Εξομοίωση συστημάτων και επίλυση διαφορικών εξισώσεων 1ης και 2ης τάξης με την χρήση λογισμικού.</p>
            <br/> <h3 align="center">Αξιολόγηση Φοιτητών</h3>
            <br/><p align="justify"><li>Εργαστηριακή εξέταση (ΕΕ) (50%)</li><li> Εβδομαδιαία εργαστηριακές εργασίες σε μικρές ομάδες</li><li>Τελική Εξέταση εργαστηρίου(ΓΕ) (50%) που περιλαμβάνει εργασία εξαμήνου, που την παρουσιάζουν στο τέλος.</li></p>
            <br/><br/>  
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default G;