import React from 'react';
import avatar from './../static_src/img/myphoto.png'

class Sidebar extends React.Component {

    render() {
        return (
            <section className="about-me">
                <a href="/" className="avatar"><img src={avatar} alt="avatar" className="avatar__image" /></a>
                <p className="name">Mariya Radchuk</p>
                <p className="profession">Front-end developer</p>
                <section className="basic-information">
                    <section className="target">
                        <i className="fa fa-bullseye icon" aria-hidden="true"></i><h2 className="block-header">Objective</h2>
                        <p className="block-text">Searching for a position of Junior web developer.</p>
                    </section>
                    <section className="general-info">
                        <i className="fa fa-info-circle icon" aria-hidden="true"></i><h2 className="block-header">General info</h2>
                        <article className="block-text">
                            <p>City of residence: Bristol, UK</p>
                            <p>Nationality: Belarusian</p>
                            <p>Date of Birth: 28 Aug 1991</p>
                        </article>
                    </section>
                    <section className="contacts">
                        <i className="fa fa-address-book-o icon" aria-hidden="true"></i><h2 className="block-header">For contact</h2>
                        <ul className="block-text">
                            <li className="contact-info">
                                <i className="fa fa-mobile mini-icon mini-icon__mobile" aria-hidden="true"></i>
                                <span className="contacts__block-text">+44 7759 447531</span>
                            </li>
                            <li className="contact-info">
                                <i className="fa fa-envelope-o mini-icon" aria-hidden="true"></i>
                                <a href="mailto:radchuk.mary@gmail.com?Subject=Resume%20response" target="_top" className="contacts__block-text email">radchuk.mary@gmail.com</a>
                            </li>
                            <li className="links-for-print">https://github.com/dandel10n</li>
                            <li className="links-for-print">https://www.linkedin.com/in/mariya-radchuk</li>
                        </ul>
                    </section>
                </section>
                <section className="social-media-links">
                    <div className="social-media-link"><a href="https://www.linkedin.com/in/mariya-radchuk" className="fa fa-linkedin icon social-media-links__icon" aria-hidden="true"></a></div>
                    <div className="social-media-link"><a href="https://github.com/dandel10n" className="fa fa-github icon social-media-links__icon" aria-hidden="true"></a></div>
                </section>
            </section>
        )
    }
}

export default Sidebar;
