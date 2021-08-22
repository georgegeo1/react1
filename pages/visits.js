import React from 'react';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
// import Footer from '../components/_App/Footer';
import Link from 'next/link';


const project1 = () => {
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner 
                pageTitle="Επισκέψεις – διαλέξεις καθηγητών από ξένα πανεπιστήμια" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Επισκέψεις – διαλέξεις καθηγητών από ξένα πανεπιστήμια" 
            />  

        <div class="card">
            <br/><br/>
            <img src="/images/img61.jpg" alt="image" align="center" width="800" height="600" /><br/>
            <h4>Συνεργασια με το HIGHER TECHNICAL INSTITUTE CYPRUS…</h4><br/>
            <img src="/images/img62.jpg" alt="image" align="center" width="800" height="600" /><br/>
            <img src="/images/img63.jpg" alt="image" align="center" width="800" height="600" /><br/>
            <img src="/images/img64.jpg" alt="image" align="center" width="800" height="600" /><br/>
            <img src="/images/img65.jpg" alt="image" align="center" width="800" height="600" /><br/>
            <img src="/images/img66.jpg" alt="image" align="center" width="800" height="600" /><br/>
            <img src="/images/img67.jpg" alt="image" align="center" width="800" height="600" /><br/>
            <img src="/images/img68.jpg" alt="image" align="center" width="800" height="600" /><br/>
            <img src="/images/img69.jpg" alt="image" align="center" width="800" height="600" /><br/>
            <img src="/images/img70.jpg" alt="image" align="center" width="800" height="600" /><br/>
            <img src="/images/img71.jpg" alt="image" align="center" width="800" height="600" /><br/>
            <img src="/images/img72.jpg" alt="image" align="center" width="800" height="600" /><br/>
            <img src="/images/img73.jpg" alt="image" align="center" width="800" height="600" /><br/>
            <img src="/images/img74.jpg" alt="image" align="center" width="800" height="600" /><br/>
            <img src="/images/img75.jpg" alt="image" align="center" width="800" height="600" /><br/>
            
        </div>

        <br/><br/>

            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default project1;