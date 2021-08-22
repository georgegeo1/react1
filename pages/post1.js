import React from 'react';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
// import Footer from '../components/_App/Footer';
import BlogSidebar from '../components/Blog/BlogSidebar';
import CommentArea from '../components/Blog/CommentForm';

const BlogDetails = () => {
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner 
                pageTitle="Εργαστηριακό μάθημα Σ.Α.Ε Εαρινό Εξάμηνο 2015" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Εργαστηριακό μάθημα Σ.Α.Ε Εαρινό Εξάμηνο 2015" 
            />  

            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">

                                <img src="/images/post11.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post12.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post13.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post14.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post15.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post16.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post17.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/> <img src="/images/post18.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post19.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post110.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post111.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post112.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post113.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post114.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post115.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post116.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post117.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post118.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post119.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post121.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post122.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post123.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><br/>

                                <CommentArea />
                            </div>
                        </div>

   
                    </div>
                </div>
            </div>
       
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default BlogDetails;