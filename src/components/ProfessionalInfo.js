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
        if (e.target.innerText === this.state.currentTechnology) {
            this.updateCurrentTechnology(null);
        } else {
            this.updateCurrentTechnology(e.target.innerText);
        }
    }

    render(){
        const technologiesList = technologies.map(technology => {
            let technologyName = technology.name;
            if (technology.filter) {
                let styles = 'technology_button'
                if (technology.name === this.state.currentTechnology) {
                    styles += ' active';
                }
                technologyName = (
                    <a
                        href="#projects"
                        className={styles}
                        title={"Click to see projects made with " + technology.name}
                        onClick={(e) => {
                            this.handleTechnologyClick(e);
                        }}
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

        const resetButton = (
            <span className="reset_button">
                <a
                    href="#projects"
                    className="technology_button"
                    onClick={(e) => {
                        e.preventDefault();
                        this.updateCurrentTechnology(null);
                    }}
                >
                    Show&nbsp;all.
                </a>
            </span>
        );

        return(
            <section className="professional-info">
                <a href="javascript:window.print()" id="print-button"><i className="fa fa-print" aria-hidden="true"></i></a>
                <h2 className="block-header professional-info__header">Technologies and tools</h2>
                <div className="professional-info__block">
                    { technologiesList }
                    {this.state.currentTechnology ? resetButton : null}
                </div>

                <h2 className="block-header">Portfolio</h2>
                <article className="portfolio__block">
                    <Projects
                        selectedTechnology={this.state.currentTechnology}
                    />
                </article>
            </section>
        )
    }
}

export default ProfessionalInfo;
