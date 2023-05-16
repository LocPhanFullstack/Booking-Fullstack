import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Navigator from '../../components/Navigator';
import { adminMenu, doctorMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES, USER_ROLE } from '../../utils/constant';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';

const Header = ({ processLogout, userInfo, language, changeLanguageRedux }) => {
    const [menuApp, setMenuApp] = useState([]);

    const handleChangeRole = () => {
        let menu = [];
        if (userInfo && !_.isEmpty(userInfo)) {
            let role = userInfo.roleId;
            if (role === USER_ROLE.ADMIN) {
                menu = adminMenu;
            }
            if (role === USER_ROLE.DOCTOR) {
                menu = doctorMenu;
            }
        }
        setMenuApp(menu);
    };

    const handleChangeLanguage = (language) => {
        changeLanguageRedux(language);
    };

    useEffect(() => {
        handleChangeRole();
    }, [userInfo]);

    return (
        <div className="header-container">
            {/* thanh navigator */}
            <div className="header-tabs-container">
                <Navigator menus={menuApp} />
            </div>

            <div className="languages">
                <span className="welcome">
                    <FormattedMessage id="home-header.welcome" />,{' '}
                    {userInfo && userInfo.firstName ? userInfo.firstName : ''}
                </span>
                <span
                    className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}
                    onClick={() => handleChangeLanguage(LANGUAGES.VI)}
                >
                    VN
                </span>
                <span
                    className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}
                    onClick={() => handleChangeLanguage(LANGUAGES.EN)}
                >
                    EN
                </span>
                {/* nút logout */}
                <div className="btn btn-logout" onClick={processLogout} title="Log out">
                    <i className="fas fa-sign-out-alt"></i>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageRedux: (language) => dispatch(actions.changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
