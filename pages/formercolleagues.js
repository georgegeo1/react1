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
                pageTitle="Πρώην Συνεργάτες" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Πρώην Συνεργάτες" 
            />  

        <div class="card">
            <br/><br/>
            <table><tr>
                <td><h4>Νίκος Κυριακούδης </h4><img src="/images/img51.jpg" alt="image" align="center" width="200" height="200" /></td>
                <td><h4>Βασίλης Συρρής</h4><img src="/images/img52.jpg" alt="image" align="center" width="200" height="200" /></td>
                <td><h4>Γιώργος Πουλάς </h4><img src="/images/img53.jpg" alt="image" align="center" width="200" height="200" /></td>
                <td><h4>Βασίλης Τσιτρούλης </h4><img src="/images/img54.jpg" alt="image" align="center" width="200" height="200" /></td>
                <td><h4>Χάιδω Μιζέλη </h4><img src="/images/img55.jpg" alt="image" align="center" width="200" height="200" /></td>

            </tr></table>

        </div>

        <br/><br/>

            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default project1;