import React from 'react';
import Projects from './Projects.js';
import technologies from './../technologies.js';

class ProfessionalInfo extends React.Component {
    constructor() {
        super();
        this.state = { currentTechnology: null };
    }

    updateCurrentTechnology(technologyName) {
        this.setState({ currentTechnology: technologyName })
    }

    handleTechnologyClick(e) {
        e.preventDefault();
        this.updateCurrentTechnology(e.target.innerText);
    }
    render(){
        const technologiesList = technologies.map((technology, index) => {
            let technologyName = technology.name;
            if (technology.filter) {
                technologyName = (
                    <a
                        href="#projects"
                        onClick={(e) => {
                            this.handleTechnologyClick(e);
                        }}
                        data-tip="Click to see projects made with this technology"
                    >
                        {technology.name}
                    </a>
                );
            }
            return (
                <span key={technology.name} className="technology_tag">
                    {technologyName}&emsp;
                </span>
            );
        });
        return(
            <section className="professional-info">
                <h2 className="block-header professional-info__header">Skills</h2>
                <div className="professional-info__block">
                    { technologiesList }
                </div>

                <h2 className="block-header">Portfolio</h2>
                <article className="professional-info__block">
                    <Projects
                        selectedTechnology={this.state.currentTechnology}
                    />

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

export default ProfessionalInfo;
