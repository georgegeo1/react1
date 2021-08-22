import React from 'react';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import SubscribeForm from '../components/Common/SubscribeForm';
// import Footer from '../components/_App/Footer';
import Lightbox from 'react-image-lightbox';
import Link from 'next/link';

const images = [
    ('images/lab/lab1.jpg'),
    ('images/lab/lab2.jpg'),
    ('images/lab/lab3.jpg'),
    ('images/lab/lab4.jpg'),
    ('images/lab/lab5.jpg'),
    ('images/lab/lab6.jpg'),
    ('images/lab/lab7.jpg'),
    ('images/lab/lab8.jpg'),
    ('images/lab/lab9.jpg'),
    ('images/lab/lab10.jpg'),
    ('images/lab/lab11.jpg'),
    ('images/lab/lab12.jpg'),
    ('images/lab/lab13.jpg'),
    ('images/lab/lab14.jpg'),
    ('images/lab/lab21.jpg'),
    ('images/lab/lab22.jpg'),
    ('images/lab/lab23.jpg'),
    ('images/lab/lab24.jpg'),
    ('images/lab/lab25.jpg'),
    ('images/lab/lab26.jpg'),
];

const Gallery = () => {

    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner 
                pageTitle="Εξοπλισμός Εργαστηρίου" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Εξοπλισμός Εργαστηρίου" 
            />  
            <br/>
            <h2 align="center">ΣΑΕ Εργαστήριο</h2>
            <p align="justify">Το εργαστηριακό μάθηματα των Συστημάτων Αυτόματου Ελέγχου (ΣΑΕ) είναι εξοπλισμό με ηλεκτρονικούς υπολογιστές για την κάθε ομάδα φοιτητών. Για την διεξαγωγή των πειραμάτων χρησιμοποιείται το μαθηματικό πακέτο Matlab – Simulink, ένα δυνατό εργαλείο στην εκπαίδευση.</p>
            <br/>
            <h2 align="center">Βιομηχανικοί Αυτοματισμοί</h2>
            <p align="justify">Το πρόγραμμα εξομοίωσης Automation Studio και PLC.</p>
            <br/>
            <h2 align="center">Αυτοματισμοί με Προγραμματιζόμενους ελεγκτές PLC</h2>

            <div className="gallery-area pt-100 pb-70">
                {/* Lightbox */}
                {isOpenImage && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpenImage(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(0);}}
                                    >
                                        <img src="/images/lab/lab1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(1);}}
                                    >
                                        <img src="/images/lab/lab2.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(2);}}
                                    >
                                        <img src="/images/lab/lab3.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(3);}}
                                    >
                                        <img src="/images/lab/lab4.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(4);}}
                                    >
                                        <img src="/images/lab/lab5.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(5);}}
                                    >
                                        <img src="/images/lab/lab6.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(6);}}
                                    >
                                        <img src="/images/lab/lab7.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(7);}}
                                    >
                                        <img src="/images/lab/lab8.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(8);}}
                                    >
                                        <img src="/images/lab/lab9.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(8);}}
                                    >
                                        <img src="/images/lab/lab10.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(8);}}
                                    >
                                        <img src="/images/lab/lab11.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(8);}}
                                    >
                                        <img src="/images/lab/lab12.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(8);}}
                                    >
                                        <img src="/images/lab/lab13.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        className="popup-btn"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(8);}}
                                    >
                                        <img src="/images/lab/lab14.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <h2 align="center">Εφαρμογές Συστημάτων Αυτομάτου Ελέγχου</h2>

<div className="gallery-area pt-100 pb-70">
    {/* Lightbox */}
    {isOpenImage && (
        <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpenImage(false)}
            onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
            }
        />
    )}

    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                    <Link href="#popup">
                        <a 
                            className="popup-btn"
                            onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(0);}}
                        >
                            <img src="/images/lab/lab21.jpg" alt="image" />
                        </a>
                    </Link>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                    <Link href="#popup">
                        <a 
                            className="popup-btn"
                            onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(1);}}
                        >
                            <img src="/images/lab/lab22.jpg" alt="image" />
                        </a>
                    </Link>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                    <Link href="#popup">
                        <a 
                            className="popup-btn"
                            onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(2);}}
                        >
                            <img src="/images/lab/lab23.jpg" alt="image" />
                        </a>
                    </Link>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                    <Link href="#popup">
                        <a 
                            className="popup-btn"
                            onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(3);}}
                        >
                            <img src="/images/lab/lab24.jpg" alt="image" />
                        </a>
                    </Link>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                    <Link href="#popup">
                        <a 
                            className="popup-btn"
                            onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(4);}}
                        >
                            <img src="/images/lab/lab25.jpg" alt="image" />
                        </a>
                    </Link>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-gallery-item">
                    <Link href="#popup">
                        <a 
                            className="popup-btn"
                            onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(5);}}
                        >
                            <img src="/images/lab/lab26.jpg" alt="image" />
                        </a>
                    </Link>
                </div>
            </div>


        </div>
    </div>
</div>

            <SubscribeForm />
      
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default Gallery;