import React from 'react'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    items: 1,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
};

const slideImages = [
    'images/im1.jpg',
    'images/im2.jpg',
    'images/im3.jpg',
    'images/im4.jpg',
    'images/im5.jpg',
    'images/im6.jpg',
    'images/im7.jpg',
  ];

  const Slider= () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="testimonials-area ptb-100">
            <div className="container">
                <div className="section-title">
                { display ? <OwlCarousel 
                    className="testimonials-slides-two owl-carousel owl-theme"
                    {...options}>
                    <div>  
                        <img src="/images/im1.jpg" alt="image" />
                    </div>
                    <div>  
                        <img src="/images/im2.jpg" alt="image" />
                    </div>
                    <div>  
                        <img src="/images/im3.jpg" alt="image" />
                    </div>
                    <div>  
                        <img src="/images/im4.jpg" alt="image" />
                    </div>
                    <div>  
                        <img src="/images/im5.jpg" alt="image" />
                    </div>
                    <div>  
                        <img src="/images/im6.jpg" alt="image" />
                    </div>
                    <div>  
                        <img src="/images/im7.jpg" alt="image" />
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
        </div>
    )
}

export default Slider