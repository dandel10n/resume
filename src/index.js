import React from 'react';
import ReactDOM from 'react-dom';
import './static_src/sass/style.css';
import myphoto from './static_src/img/myphoto.png';

class ResumeTemplate extends React.Component {
    render() {
        return (
            <div className="resume-container">
                <section className="about-me">
                    <a href="/" className="avatar"><img src={myphoto} alt="avatar" className="avatar__image" /></a>
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
                <ProfessionalInfo />
            </div>
        )
    }
}

class ProfessionalInfo extends React.Component {
    render(){
        return(
            <section className="professional-info">
                <h2 className="block-header professional-info__header">Skills</h2>
                <ul className="professional-info__block">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>Git</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>React</li>
                </ul>

                <h2 className="block-header">Portfolio</h2>
                <article className="professional-info__block">
                    <a href="/furniture_store.html" className="preview">
                        <div className="preview__image furniture-store"></div>
                        <p className="preview__image-desc">Show details</p>
                    </a>
                    <a href="/trampolines_site.html" className="preview">
                        <div className="preview__image trampolines-site"></div>
                        <p className="preview__image-desc">Show details</p>
                    </a>
                    <a href="/global_factoring_network_site.html" className="preview">
                        <div className="preview__image global-factoring-network"></div>
                        <p className="preview__image-desc">Show details</p>
                    </a>
                    <a href="/design_studio.html" className="preview">
                        <div className="preview__image design-studio"></div>
                        <p className="preview__image-desc">Show details</p>
                    </a>
                    <div>
                      <div>
                          <a href="/js_calculator.html" className="preview js-project-preview">
                              <div className="preview__image js-calculator"></div>
                              <p className="preview__image-desc">Show details</p>
                          </a>
                          <a href="/twitchTV.html" className="preview js-project-preview">
                              <div className="preview__image twitchTV"></div>
                              <p className="preview__image-desc">Show details</p>
                          </a>
                      </div>
                      <div>
                          <a href="/wiki_viewer.html" className="preview js-project-preview">
                              <div className="preview__image wiki-viewer"></div>
                              <p className="preview__image-desc">Show details</p>
                          </a>
                          <a href="/pomodoro_clock.html" className="preview js-project-preview">
                              <div className="preview__image pomodoro-clock"></div>
                              <p className="preview__image-desc">Show details</p>
                          </a>
                          <a href="/tic_tac_toe.html" className="preview js-project-preview">
                              <div className="preview__image tic_tac_toe"></div>
                              <p className="preview__image-desc">Show details</p>
                          </a>
                          <a href="/simon_game.html" className="preview js-project-preview">
                              <div className="preview__image simon_game"></div>
                              <p className="preview__image-desc">Show details</p>
                          </a>
                          <a href="/camper_leaderboard.html" className="preview js-project-preview">
                              <div className="preview__image camper_leaderboard"></div>
                              <p className="preview__image-desc">Show details</p>
                          </a>
                          <a href="/recipe_box.html" className="preview js-project-preview">
                              <div className="preview__image recipe_box"></div>
                              <p className="preview__image-desc">Show details</p>
                          </a>
                      </div>
                    </div>
                    <ul className="links-for-print">
                        <li>/furniture_store/</li>
                        <li>/design_studio_project/</li>
                        <li>/global_factoring_network_site/</li>
                        <li>/trampolines_site/</li>
                        <li>/pomodoro_clock/</li>
                        <li>/tic-tac-toe_game/</li>
                        <li>/wiki_viewer/</li>
                        <li>/twitchTV/</li>
                        <li>/JS-Calculator/</li>
                        <li>/simon_game/</li>
                        <li>/camper_leaderboard/</li>
                        <li>/recipe_box/</li>
                    </ul>
                </article>

            </section>
        )
    }
}

ReactDOM.render(
    <ResumeTemplate />,
    document.getElementById('root')
);
