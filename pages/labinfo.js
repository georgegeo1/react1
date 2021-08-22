import React from 'react';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import IntroVideo from '../components/SuccessStory/IntroVideo';
import SuccessfulStudents from '../components/SuccessStory/SuccessfulStudents';
// import Footer from '../components/_App/Footer';
import Link from 'next/link';

const SuccessStory = () => {
    return (
        <React.Fragment>
            <h2 align="center"><b>Γενικά</b></h2> <br/><br/>
            <p align="center">Στο εργαστήριο Συστημάτων Αυτομάτου Ελέγχου (ΣΑΕ), οι φοιτητές εκπαιδεύονται σε 4 μαθήματα:</p>
            <div className="our-story-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="our-story-title">
                                <h3><span className="number">1</span> Συστήματα Αυτόματου Ελέγχου</h3>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="our-story-content">
                                <p align="justify">Το εργαστηριακό μάθημα αυτό είναι το βασικότερο καθώς ο φοιτητής έρχεται σε πρώτη επαφή με τα συστήματα αυτόματου ελέγχου, περιλαμβάνει μια συλλογή από ασκήσεις που διεξάγονται με την βοήθεια του μαθηματικού πακέτου Matlab.</p>
                    
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="our-story-title">
                                <h3><span className="number">2</span> Βιομηχανικοί Αυτοματισμοί</h3>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="our-story-content">
                                <p align="justify">Σε αυτό το μάθημα μέσω πρακτικών πρακτικών εφαρμογών γίνεται η προσαρμογή του φοιτητή στο περιβάλλον μελέτης, σχεδίασης, συντήρησης και επισκευής συστημάτων παραγωγικών διεργασιών στα επίκαιρα εργαλεία και στις εφαρμοσμένες μεθόδους στη Βιομηχανία. Στο εργαστήριο χρησιμοποιείται το πρόγραμμα εξομοίωσης Automation Studio και τα PLC .</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="our-story-title">
                                <h3><span className="number">3</span> Αυτοματισμοί με Προγραμματιζόμενους ελεγκτές PLC (επιλογής)</h3>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="our-story-content">
                                <p align="justify"> Εδώ γίνεται μια  εμπεριστατωμένη εισαγωγή του φοιτητή στις εφαρμογές των αυτοματισμών με PLC. Ασκήσεις Εφαρμογής χρησιμοποιώντας διαγράμματα LADDER. Προσομοίωση διαφόρων συστημάτων με το Microwin Step 7. Εφαρμογή του Microwin στα συστήματα : Γερανογέφυρας – Ελέγχου Στάθμης Υγρών – Σύστημα Παραγωγής Καπουτσίνο – Ανελκυστήρα – Συστήματος διάτρησης – Συστήματος προστασίας οπωροφόρων από παγετό – Συστήματος αυτόματης βαφής – Συστήματος συναγερμού – Μεταφοράς Φορτίων σε Ταινιόδρομο – Αυτοματισμός σπιτιού διαφόρων διεργασιών. Εφαρμογές της γλώσσας LADDER και FBD στις παρακάτω εργαστηριακές μονάδες (Reaction Vessel – Pipe Bending Machine – Roll Round Device – Embossing Machine – Level Control – Starter Control).</p>
        
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="our-story-title">
                                <h3><span className="number">4</span> Εφαρμογές Συστημάτων Αυτομάτου Έλεγχου</h3>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="our-story-content">
                                <p align="justify">Στόχος του μαθήματος είναι η δημιουργία του  βασικού υπόβαθρου για την κατανόηση της ευρείας επιστημονικής περιοχής των Συστημάτων Αυτόματου Ελέγχου (Σ.Α.Ε.) καθώς και της εφαρμογής σε μονάδες κατασκευής. Έλεγχος ταχύτητας D.C. κινητήρα, ανοικτού και κλειστού βρόχου χωρίς φορτίο & με φορτίο. – Έλεγχος σερβομηχανισμού θέσης.- Σύστημα ελέγχου στάθμης υγρών. -Σύστημα ελέγχου ροής δύο υγρών. – Παραδείγματα και εφαρμογές (Έλεγχος μίξης υγρών – θερμοκρασίας φούρνου) -Σύστημα ελέγχου σφαίρας Ball and Beam -Σύστημα Ελέγχου Ψηφιακού Εκκρεμούς (Inverted Pendulum) με Η/Υ – Αναλογικός έλεγχος συστημάτων: Εξομοίωση συστημάτων και επίλυση διαφορικών εξισώσεων 1ης και 2ης τάξης με την χρήση λογισμικού.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
         
        </React.Fragment>
    )
}

export default SuccessStory;