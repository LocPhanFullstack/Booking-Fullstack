import React from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.scss';
import OutstandingDoctor from './Section/OutstandingDoctor';
import HandBook from './Section/HandBook';

const HomePage = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
    };
    return (
        <div>
            <HomeHeader />
            <Specialty settings={settings} />
            <MedicalFacility settings={settings} />
            <OutstandingDoctor settings={settings} />
            <HandBook settings={settings} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
