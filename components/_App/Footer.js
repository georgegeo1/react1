import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
 
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <Link href="/">
                                <a className="logo">
                                    <img src="/images/logo2.png" alt="logo" />
                                </a>
                            </Link>

                            <p><b>Εργαστήριο Εφαρμογών Συστημάτων Αυτόματου Ελέγχου και Προγραμματιζόμενων Λογικών Ελεγκτών </b></p>
                            <p><i>Χρήστος Κ. Μανάβης</i></p>

                            <ul className="social-link">
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-block" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Εξερευνήστε</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/announcements">
                                        <a>Ανακοινώσεις</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/labprofile">
                                        <a>Προφίλ Εργαστηρίου</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/visits">
                                        <a>Διαλέξεις</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/labinstructor">
                                        <a>Ο Διδάσκων</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Πληροφορίες</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/contact">
                                        <a>Επικοινωνία</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://eudoxus.gr/">
                                        <a>Εύδοξος</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.iee.ihu.gr/">
                                        <a>IEE IHU</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="http://pithia.teithe.gr/unistudent/">
                                        <a>PITHIA</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://moodle.teithe.gr/">
                                        <a>Moodle TEITHE</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/documents">
                                        <a>Έντυπα</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>
                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                    Αλεξάνδρειο Τ.Ε.Ι. Θεσσαλονίκης, Εργαστήριο Δ3
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i> 
                                    <a href="tel:+44587154756">+30 2310 013629, +30 2310 013092</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i> 
                                    <a href="mailto:hello@edemy.com">plc.esae.ihu@gmail.com, manavis@el.teithe.gr</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p><i className='bx bx-copyright'></i>{currentYear} All Rights Reserved</p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                        </div>
                    </div>
                </div>
            </div>

            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </footer>
    );
}

export default Footer;