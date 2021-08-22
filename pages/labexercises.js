import React from 'react';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
// import Footer from '../components/_App/Footer';
import Link from 'next/link';
import Video3 from '../components/Video3';
import Video4 from '../components/Video4';
import Video5 from '@/components/Video5';
import Video6 from '@/components/Video6';
import Video7 from '@/components/Video7';
import Video8 from '@/components/Video8';
import Video9 from '@/components/Video9';
import Video10 from '@/components/Video10';
import Video11 from '@/components/Video11';
import Video12 from '@/components/Video12';

const s = () => {
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner 
                pageTitle="Εφαρμογές Συστημάτων Αυτομάτου Έλεγχου (επιλογής)" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Εφαρμογές Συστημάτων Αυτομάτου Έλεγχου (επιλογής)" 
            />  
            <br/><br/><h3>Παρουσίαση Ασκήσεων</h3>
        <div class="card">
            <br/><br/>           
            <h3>Άσκηση 1: Σύστημα ελέγχου ταχύτητας</h3>
            <br/>
            <img src="/images/img81.jpg" alt="image" align="center" width="800" height="600" />
            <br/>
            <br/> <p align="justify">Σκοπός της παρούσης πειραματικής άσκησης είναι η μελέτη του ελέγχου ταχύτητας σε σύστημα κινητήρα συνεχούς ρεύματος. Θα μελετηθεί το σύστημα του κινητήρα συνεχούς ρεύματος χωρίς ανατροφοδότηση δηλαδή ένα σύστημα ανοιχτού βρόγχου. Αντικειμενικός στόχος της άσκησης είναι ο προσδιορισμός της ταχύτητας του κινητήρα τόσο κατά την εφαρμογή κάποιου φορτίου στον άξονα του κινητήρα όσο και όταν σε αυτόν δεν εφαρμόζεται κανένα φορτίο. Θα εξαχθούν συνεπώς συμπεράσματα για την συμπεριφορά του κινητήρα σαν ανοιχτό σύστημα και θα αναζητηθεί η σχέση μεταξύ των στροφών του άξονα του κινητήρα και της τάσης της ταχογενννήτριας.</p>
            <Video3 /> <br/>
        
        </div><br/><br/>

        <div class="card">
            <br/><br/>           
            <h3>Άσκηση 2: Σύστημα ελέγχου σφαίρας σε δοκό</h3>
            <br/>
            <img src="/images/img82.jpg" alt="image" align="center" width="800" height="600" />
            <br/>
            <br/> <p align="justify">Σκοπός του πειράματος είναι να ελεγχθεί η σφαίρα στο δοκό με διάφορους τρόπους: (P),(PI),(PID).</p>
            <Video4 /> <br/>
        
        </div><br/><br/>

        <div class="card">
            <br/><br/>           
            <h3>Άσκηση 3: Έλεγχος θέσης δρομέα σε άξονα με χρήση P.L.C.</h3>
            <br/>
            <img src="/images/img83.jpg" alt="image" align="center" width="800" height="600" />
            <br/>
            <br/> <p align="justify">Στην παρούσα εργαστηριακή άσκηση θα πραγματοποιηθεί έλεγχος της θέσης ενός ηλεκτρικού δρομέα, που μπορεί να δώσει θεμελιώδη εφόδια και γνώσεις στο φοιτητή σχετικά με το PLC (Programmable Logic Controllers) στις σημερινές βιομηχανικές εφαρμογές.</p>
            <Video5 /> <br/>
        
        </div><br/><br/>

        <div class="card">
            <br/><br/>           
            <h3>Άσκηση 4: Σύστημα ελέγχου στάθμης υγρών (σύστημα 1ης τάξης)</h3>
            <br/>
            <img src="/images/img833.jpg" alt="image" align="center" width="800" height="600" />
            <br/>
            <br/> <p align="justify">Ο σπουδαστής θα εξοικειωθεί με τα Συστήματα 1ης τάξης και θα αποκτήσει βασικές γνώσεις πάνω σε αυτά και τη χρονική απόκριση ενός συστήματος ανάλογα με την είσοδό του.</p>
            <Video6 /> <br/>
        
        </div><br/><br/>

        <div class="card">
            <br/><br/>           
            <h3>Άσκηση 5: Επίλυση διαφορικών εξισώσεων και εφαρμογή στον αναλογικό υπολογιστή</h3>
            <br/>
            <br/> <p align="justify">Σε αυτήν την άσκηση θα δούμε πως μπορούμε να εφαρμόσουμε στην πράξη τις διαφορικές μας εξισώσεις πάνω στον αναλογικό υπολογιστή.</p>
            <Video7 /> <br/>
        
        </div><br/><br/>

        <div class="card">
            <br/><br/>           
            <h3>Άσκηση 6: Σύστημα ελέγχου ροής 2 υγρών (σύστημα 2ης τάξης)</h3>
            <br/>
            <img src="/images/img85.jpg" alt="image" align="center" width="800" height="600" />
            <br/>
            <br/> <p align="justify">Ο σπουδαστής θα μελετήσει ένα σύστημα ελέγχου ροής 2 υγρών, σε πρόγραμμα εξομοίωσης στον υπολογιστή. Το σύστημα είναι δεύτερης τάξης και θα τον βοηθήσει να κατανοήσει τα συστήματα αυτά και να διαπιστώσει τις διαφορές με τα συστήματα 1ης τάξης.</p>
            <Video8 /> <br/>
        
        </div><br/><br/>

        <div class="card">
            <br/><br/>           
            <h3>Άσκηση 7: Επίλυση διαφορικών εξισώσεων και εξομοίωση με το πρόγραμμα του υπολογιστή</h3>
            <br/>
            <img src="/images/img85.jpg" alt="image" align="center" width="800" height="600" />
            <br/>
            <br/> <p align="justify">Ο σπουδαστής θα πρέπει να συγκρίνει τα αποτελέσματα που πήρε στην άσκηση #5 με τα αποτελέσματα που πήρε από το πρόγραμμα εξομοίωσης και να καταγράψει τις παρατηρήσεις του.</p>
            <Video9 /> <br/>
        
        </div><br/><br/>

        <div class="card">
            <br/><br/>           
            <h3>Άσκηση 8: Εξομοίωση και επίλυση συναρτήσεων μεταφοράς 1ης και 2ης τάξης</h3>
            <br/>
            <br/> <p align="justify">Η μελέτη της συνάρτησης μεταφοράς , της ευστάθειας συστημάτων, των κριτηρίων Niquist και των διαγραμμάτων Bode Gain and Phase.</p>
            <Video10 /> <br/>
        
        </div><br/><br/>

        <div class="card">
            <br/><br/>           
            <h3>Άσκηση 9: Βιολογικό σύστημα ελέγχου</h3>
            <br/>
            <br/> <p align="justify">Κατανόηση του ανθρώπινου συστήματος ελέγχου, της συνεργασίας συστημάτων και μαθηματικών εφαρμογών πάνω σε αυτά.</p>
            <Video11 /> <br/>
        
        </div><br/><br/>

        <div class="card">
            <br/><br/>           
            <h3>Άσκηση 10: Σύστημα ελέγχου 3 δεξαμενών</h3>
            <br/>
            <br/> <p align="justify">Στην πειραματική διαδικασία θα μελετήσουμε τους τρόπους με τους οποίους μπορούμε να ελέγξουμε την απόκριση του συστήματος τριών δεξαμενών. Αρχικά θα μελετήσουμε την συμπεριφορά του συστήματος χωρίς έλεγχο PΙ (Αναλογικό (Proportional) – Ολοκληρωτικό (Integral) τρόπο ελέγχου) και στην συνέχεια θα υλοποιήσουμε έναν κλειστό βρόχο όπου θα πραγματοποιείται έλεγχος PΙ.</p>
            <Video12 /> <br/>
        
        </div><br/><br/>

        


        <br/><br/>

            
            
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default s;