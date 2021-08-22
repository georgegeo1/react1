import React from 'react';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
// import Footer from '../components/_App/Footer';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SubscribeForm from '../components/Common/SubscribeForm';

resetIdCounter();

const Faq = () => {
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner 
                pageTitle="Frequently Asked Questions" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQ's" 
            />  

            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="tab faq-accordion-tab">
                        <Tabs>
                            <TabList>
                                <Tab><i className='bx bx-flag'></i> <span>Suspendisse</span></Tab>
                                <Tab><i className='bx bxs-badge-dollar'></i> <span>Fusce ids</span></Tab>
                                <Tab><i className='bx bx-shopping-bag'></i> <span>Vivamus</span></Tab>
                                <Tab><i className='bx bx-book-open'></i> <span>Duis condimentum</span></Tab>
                                <Tab><i className='bx bx-info-circle'></i> <span> Integer ut turpis</span></Tab>
                            </TabList>
                        
                            <TabPanel>
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem  uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Morbi elementum felis quis mi varius?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Proin feugiat gravida dolor, non ultricies tellus ultricies ac. Vestibulum consectetur dolor in tortor efficitur, sit amet porttitor purus ultrices.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Pellentesque habitant morbi tristique senectus et?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat, sapien ac aliquet blandit, lacus sapien iaculis felis, vel porta lectus arcu a libero.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Phasellus massa ligula?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Etiam tortor elit, dictum sit amet laoreet in, volutpat eu turpis.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Nunc aliquam porttitor elit?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Nam id fermentum augue. Praesent sagittis arcu nec nisl elementum molestie. Fusce sed ex purus. Phasellus massa ligula, hendrerit eu vehicula a, facilisis quis augue. Integer pellentesque orci non metus fringilla, id finibus massa ullamcorper. Curabitur ut lorem ac nibh pellentesque elementum nec ut ipsum. </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                Nullam ac pretium ipsum?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Curabitur ut lorem ac nibh pellentesque elementum nec ut ipsum. Donec in gravida urna, eu euismod sem. In a maximus eros, imperdiet cursus dui.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel>

                           
                        </Tabs>
                    </div>
                </div>
            </div>

         
     
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default Faq;