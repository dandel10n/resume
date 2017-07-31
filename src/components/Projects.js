import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import projectsContent from './../projectsContent';

class Projects extends React.Component {

    renderProjectsList(projects) {
        return projects.map((project, index) => (
            <Project {...project} key = {index} />
        ))
    }

    displayProjectsList() {

        let filteredProjects;

        if (this.props.selectedTechnology) {
            filteredProjects = projectsContent.filter(project => (
                project.technologies.indexOf(this.props.selectedTechnology) !== -1
            ));
        } else {
            filteredProjects = projectsContent;
        }

        const projectsToDisplay = this.renderProjectsList(filteredProjects);

        const urls = projectsContent.map(item =>
            <li key={item.name}>{item.url}</li>
        );

        return (
            <div className="projects__grid">
                { projectsToDisplay }
                <ul className="links-for-print">
                    { urls }
                </ul>
            </div>
        );
    }

    render() {

        return (
            <div className="portfolio__block">
                <h2 className="block-header">Portfolio</h2>
                {this.displayProjectsList()}
            </div>
        )
    }
}

Projects.propTypes = {
    selectedTechnology: PropTypes.string
};

export default Projects;
