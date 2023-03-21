import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Banner from '../components/Banner';
import FaqSection from '../components/FaqSection';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const Faq = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <FaqSection/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Faq;