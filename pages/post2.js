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
                pageTitle="Παρουσιάσεις Πτυχιακών" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Παρουσιάσεις Πτυχιακών" 
            />  

            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">

                                <br/><img src="/images/post21.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post22.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><p align="justify">Σπανός Ν. Μιχάλης “Αυτόνομη θέρμανση δύο κατοικιών με την χρήση P.L.C και παροχή από Ανανεώσιμες Πηγές Ενέργειας(Α.Ε.Π.)”</p>
                                <br/><img src="/images/post23.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post24.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><img src="/images/post25.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                <br/><br/><p align="center">Ανάληψη πρακτικής εργασίας</p>
                                <br/><img src="/images/post26.jpg" alt="image" align="center" width="800" height="600" /><br/>
                                
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