import React from 'react';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
// import Footer from '../components/_App/Footer';

const Blog3 = () => {
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner 
                pageTitle="Blog" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog" 
            />  

            <div className="blog-area ptb-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/single-blog-1">
                                        <a className="d-block">
                                            <img src="/images/blog/post1.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <Link href="#">
                                        <a className="category">Education</a>
                                    </Link>
                                    <h3>
                                        <Link href="/post1">
                                            <a>Εργαστηριακό μάθημα Σ.Α.Ε Εαρινό Εξάμηνο 2015</a>
                                        </Link>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <img src="/images/admin.jpg" className="rounded-circle" alt="image" />
                                                <span>Admin</span>
                                            </div>
                                        </li>
                                        <li>
                                            <i className='flaticon-calendar'></i> May 20, 2015
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/single-blog-1">
                                        <a className="d-block">
                                            <img src="/images/blog/post2.jpg" alt="image"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <Link href="#">
                                        <a className="category">Education</a>
                                    </Link>
                                    <h3>
                                        <Link href="/post2">
                                            <a>Παρουσιάσεις Πτυχιακών</a>
                                        </Link>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <img src="/images/admin.jpg" className="rounded-circle" alt="image" />
                                                <span>Admin</span>
                                            </div>
                                        </li>
                                        <li>
                                            <i className='flaticon-calendar'></i> March 22, 2014
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/single-blog-1">
                                        <a className="d-block">
                                            <img src="/images/blog/post3.jpg" alt="image"/>
                                        </a>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <Link href="#">
                                        <a className="category">Education</a>
                                    </Link>
                                    <h3>
                                        <Link href="/post3">
                                            <a>Επισκέψεις – διαλέξεις καθηγητών από ξένα πανεπιστήμια</a>
                                        </Link>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <img src="/images/admin.jpg" className="rounded-circle" alt="image" />
                                                <span>Admin</span>
                                            </div>
                                        </li>
                                        <li>
                                            <i className='flaticon-calendar'></i> Feb 23, 2014
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                       
 
                        {/* Pagination */}
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area text-center">
                                <a href="#" className="prev page-numbers">
                                    <i className='bx bx-chevrons-left'></i>
                                </a>
                                <span className="page-numbers current" aria-current="page">1</span>
                                <a href="#" className="page-numbers">2</a>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers">
                                    <i className='bx bx-chevrons-right'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default Blog3;