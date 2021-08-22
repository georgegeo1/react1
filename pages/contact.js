import React from 'react';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
// import Footer from '../components/_App/Footer';
import GoogleMap from '../components/Contact/GoogleMap';

const Contact = () => {
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner 
                pageTitle="Επικοινωνία" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Επικοινωνία" 
            />  

            <div className="contact-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-info">
                                <span className="sub-title">Λεπτομέρειες Επικοινωνίας</span>
                                <h2>Get in Touch</h2>
                                <p>Τμήμα Ηλεκτρονικών Μηχανικών ΤΕ</p>

                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-map'></i>
                                        </div>
                                        <h3>Διεύθυνση</h3>
                                        <p>Εργαστήριο Συστήματα Αυτομάτου Ελέγχου (Αίθουσα Δ3) Χρήστος Κ. Μανάβης</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-phone-call'></i>
                                        </div>
                                        <h3>Στοιχεία Επικοινωνίας</h3>
                                        <p>Τηλέφωνο 1: <a href="tel:+302310013629">+30 2310 013 629</a></p>
                                        <p>Τηλέφωνο 2: <a href="tel:+302310013092">+30 2310 013 092</a></p>
                                        <p>E-Mail 1: <a href="mailto:anavis@el.teithe.gr">anavis@el.teithe.gr</a></p>
                                        <p>E-Mail 2: <a href="mailto:sae.teithe.cman@gmail.com">sae.teithe.cman@gmail.com</a></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-time-five'></i>
                                        </div>
                                        <h3>Ώρες Λειτουργίας</h3>
                                        <a href='/labschedule'>Δείτε τις ώρες λειτουργίας του Εργαστηρίου</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <ContactForm />
                        </div>               
                    </div>
                </div>
            </div>
            <br/><h3 align="center">Τηλεφωνικός Κατάλογος</h3><br/>
            
            <div style={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
        
                <img src="/images/img91.png" width="400" height="600" class="center"/></div>
            <br/><br/> <h3 align="center">Πως θα έρθετε</h3><br/>
            <p align="justify">Με αστικό
Με το λεωφορείο: Νο 52 που ξεκινάει από τον Νέο Σιδηροδρομικό Σταθμό Θεσσαλονίκης, η στάση για το τμήμα λέγεται Αλεξάνδρειο Τ.Ε.Ι. Θεσσαλονίκης.
Με αυτοκίνητο:
Από το κέντρο της Θεσσαλονίκης, από την οδό Τσιμισκή βγαίνουμε στην Εθνική οδό Θεσσαλονίκης – Αθήνας και στρίβουμε δεξιά στο 9ο χλμ. προς την Βιομηχανική περιοχή της Σίνδου. Το Αλεξάνδρειο Τ.Ε.Ι. Θεσσαλονίκης βρίσκεται σε μικρή απόσταση μετά τη στροφή αυτή, στα δεξιά μας.</p>
            <GoogleMap />
     
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default Contact;