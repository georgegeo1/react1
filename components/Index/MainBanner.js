import React from 'react'
import Link from 'next/link'

const MainBanner = () => {
    return (    
        <div className="main-banner-area"> 
            <div className="container-fluid">
                <div className="row align-items-center">            
                    <div className="col-lg-6 col-md-12">       
                        <div className="main-banner-content-style-two">  
                            <br/>
                            <h1>Καλώς ήρθατε!</h1>
                            <p align="justify"><b>Το τμήμα «Μηχανικών Πληροφορικής και Ηλεκτρονικών Συστημάτων» του Διεθνούς Πανεπιστημίου της Ελλάδος (ΔΙ.ΠΑ.Ε) προήλθε από την συνένωση των τμημάτων «Μηχανικών Πληροφορικής» και «Ηλεκτρονικών Μηχανικών» την άνοιξη του 2019 και θα υποδεχτεί πρωτοετείς φοιτητές το Σεπτέμβριο του 2019.</b></p>
                            <p align="justify"><b>Το νεόδμητο κτήριο και είναι άρτια εξοπλισμένο για υψηλής ποιότητας εκπαιδευτική λειτουργία. Οι εγκαταστάσεις προσφέρουν σε φοιτητές μοναδικές δυνατότητες για εξέλιξη σε ακαδημαϊκό , ερευνητικό και επαγγελματικό επίπεδο στο ευρύ αντικείμενο των Ηλεκτρονικών επιστημών.</b></p>
                            <p align="justify"><b>Σε αυτό το χώρο στεγάζεται και το εργαστήριο των Συστημάτων Αυτομάτου Ελέγχου στην Αίθουσα Δ3 .</b></p>
                            <Link href="/authentication">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i>Join For Free<span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="banner-shape1">
                <img src="/images/banner-shape1.png" alt="image" />
            </div>
            <div className="bulb">
                <img src="/images/bulb.png" alt="image" />
            </div>
        </div>
    )
}

export default MainBanner
