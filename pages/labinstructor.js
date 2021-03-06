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
                pageTitle="ο Διδάσκων" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Ο Διδάσκων" 
            />  
            <div className="card" align="center">  <br/> <br/>        
                <span><img src="/images/ManavisChristos.jpg" alt="image"  width="120" height="120"/>  <b>Χρήστος Κ. Μανάβης</b> <br/>(Καθηγητής Εφαρμογών, A.T.E.I Θεσσαλονίκης)
                 <br/>Ηλεκτρολόγος Μηχανικός, Pratt Institute, Brooklyn, N.Y.
                 <br/>M.Sc. in Electrical Engineering, Polytechnic Institute of N.Y.
                <br/><br/><br/><h3>ΣΥΝΤΟΜΟ ΒΙΟΓΡΑΦΙΚΟ</h3>
                <br/><p align="justify">Ο Χρήστος Κ. Μανάβης γεννήθηκε στη Σκοτεινή Αργολίδος το 1954. Είναι παντρεμένος με την Σοφία Κοσμετάτου και έχουν τέσσερα παιδιά. Σπούδασε Ηλεκτρονικός Μηχανικός στο Pratt Institute της Νέας Υόρκης των Η.Π.Α και πήρε το πτυχίο του Ηλεκτρονικού Μηχανικού (1/2/1981) (Bachelor’s Degree) .</p>
                <br/><p align="justify">Ως πρακτική Άσκηση εργάστηκε στη Νέα Υόρκη σε διάφορα έργα ηλεκτρονικών και ηλεκτρικών εγκαταστάσεων. Πήρε το Μεταπτυχιακό Δίπλωμα ( 31/1/1985 ) (Master of Science M.Sc) στο Brooklyn Polytechnic της Νέας Υόρκης των Η.Π.Α με κατεύθυνση στα Συστήματα Αυτομάτου Ελέγχουv και στα Ηλεκτρονικά Ισχύος.</p>
                <br/><p align="justify">Από το 1981 έως το 1987 εργάστηκε μετά από επιτυχείς εξετάσεις ειδικών γνώσεων στα Ηλεκτρονικά Ισχύος και Αυτοματισμού για την Πολιτεία της Νέας Υόρκης, (Ν.Υ City Transit Authority – Μετρό της Νέας Υόρκης) όπου τον κατέταξαν στον τομέα του Power Engineering… Αντικείμενο εργασίας, στην έρευνα και την μελέτη της μεγίστης απόδοσης των υποσταθμών υψηλής τάσης του Μετρό . Υπεύθυνος για τον έλεγχο επισκευής πέντε διαφορετικών έργων σε υποσταθμούς Ισχύος ( μετατροπής Εναλλασσόμενης τάσης σε Συνεχή A.C to D.C και την εγκατάσταση ανορθωτών πυριτίου Ισχύος – silicon rectifiers ) καθώς και στην εγκατάσταση καλωδίου μεταφοράς ενέργειας (Two million cables).</p>
                <br/><p align="justify">Την περίοδο 1986-87 Εργάστηκε για το ΑΤΕΙ Θεσσαλονίκης ως καθηγητής επιμόρφωσης στους καθηγητές τμημάτων Ηλεκτρολογίας των ΑΤΕΙ Θεσσαλονίκης, Σερρών, Κοζάνης, Καβάλας και Λάρισας στα διδακτικά πεδία «Υψηλές Τάσεις» και «Συστήματα Ηλεκτρικής Ενέργειας».</p>
                <br/><p align="justify">Το 1989 εκλέχτηκε Καθηγητής Εφαρμογών στο τμήμα Ηλεκτρονικής του ΑΤΕΙ Θεσσαλονίκης όπου υπηρετεί μέχρι σήμερα. Δίδαξε τα Εργαστηριακά μαθήματα με γνωστικά αντικείμενα : Συστήματα Αυτομάτου Έλεγχου( Σ.Α.Ε ) , Ψηφιακά Σ.Α.Ε. ( P.L.C. ), Βιομηχανικοί Αυτοματισμοί (Πνευματικά Συστήματα ), Ηλεκτρονικά Ισχύος, Συστήματα Ήχου, Θεωρία Κυκλωμάτων, CAD Ηλεκτρονικών Κατασκευών.</p>
                <br/><p align="justify">Από τον Οκτώβριο 2010 – Σεπτέμβριο 2011 Ερευνητικό έργο στο Πανεπιστήμιο του BRUNEL Δυτικού Λονδίνου με θέμα “Gain Determination and Matrix Response Analysis for an optimized Semiconducting Superlattice Electromagnetic Sound Generator”.</p>
                <br/><p align="justify">Από το 2006-2010. Ακαδημαϊκός υπεύθυνος του προγράμματος Erasmus “Κινητικότητα για Διδασκαλία” (mobility for teaching assignments), Τμήμα Ηλεκτρονικής, ΑΤΕΙΘ.</p>
                <br/><p align="justify">Την παραπάνω περίοδο το τμήμα Ηλεκτρονικής πήρε την πρώτη θέση στις μετακινήσεις εκπαιδευτικού προσωπικού και φοιτητών σε σχέση με τα άλλα τμήματα του ΑΤΕΙΘ.</p>
                <br/><p align="justify">Συνεργασίες του Τμήματος Ηλεκτρονικής του ΑΤΕΙ με Ευρωπαϊκά Πανεπιστήμια για ανταλλαγές και επαφές εκπαιδευτικού προσωπικού και φοιτητών. Επισκέψεις, ανακοινώσεις – συμμέτοχες- διαλέξεις σε συνεδρία.</p>
                <br/><p align="justify">Υπήρξε Αναπληρωτής Υπεύθυνος Τομέα Μαθημάτων Εξειδίκευσης και μέλος του Συμβούλιου του Τμήματος.</p>       
                </span>
            </div>              
            <SubscribeForm />
      
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default G;