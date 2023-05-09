import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';

const Specialty = ({ settings }) => {
    return (
        <div className="section-share section-specialty">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Chuyên khoa phổ biến</span>
                    <button className="btn-section">Xem thêm</button>
                </div>
                <div className="section-body">
                    <Slider {...settings}>
                        <div className="section-customize">
                            <div className="bg-image section-specialty"></div>
                            <div>Cơ xương khớp 1</div>
                        </div>
                        <div className="section-customize">
                            <div className="bg-image section-specialty"></div>
                            <div>Cơ xương khớp 1</div>
                        </div>
                        <div className="section-customize">
                            <div className="bg-image section-specialty"></div>
                            <div>Cơ xương khớp 1</div>
                        </div>
                        <div className="section-customize">
                            <div className="bg-image section-specialty"></div>
                            <div>Cơ xương khớp 1</div>
                        </div>
                        <div className="section-customize">
                            <div className="bg-image section-specialty"></div>
                            <div>Cơ xương khớp 1</div>
                        </div>
                        <div className="section-customize">
                            <div className="bg-image section-specialty"></div>
                            <div>Cơ xương khớp 1</div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
