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
                pageTitle="Επισκέψεις – διαλέξεις καθηγητών από ξένα πανεπιστήμια" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Επισκέψεις – διαλέξεις καθηγητών από ξένα πανεπιστήμια" 
            />  

            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">

                                <br/><img src="/images/post31.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><br/><p align="center">Συνεργασια με το HIGHER TECHNICAL INSTITUTE CYPRUS</p>
                                <br/><img src="/images/post32.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post33.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post34.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post35.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post36.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post37.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post38.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post39.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post310.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post311.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post312.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post313.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post314.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post315.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post316.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                
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