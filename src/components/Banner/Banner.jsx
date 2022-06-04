import React from "react";
import styleMain from './Banner.module.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../../logo/banner/1.jpg';
import image2 from '../../logo/banner/2.jpg';
import image3 from '../../logo/banner/3.jpg';

const Banner = () => {
    return (
        <div className={styleMain.banner}>
            <AliceCarousel autoPlay autoPlayInterval="2000" animationType="fadeout" infinite>
                <img src={image1} alt="banner1" width='100%' height='300px' srcSet={image1} />
                <img src={image2} alt="banner2" width='100%' height='300px' srcSet={image2} />
                <img src={image3} alt="banner3" width='100%' height='300px' srcSet={image3} />
                <img src={image2} alt="banner2" width='100%' height='300px' srcSet={image2} />
            </AliceCarousel>
        </div>
    )
}

export default Banner;