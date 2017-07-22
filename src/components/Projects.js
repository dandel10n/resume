import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import projectsContent from './../projectsContent';

function Projects() {
    const projectContent = projectsContent.map((project, index) => {
        return <Project {...project} key = {index} />
    })
    return (
        <div>{projectContent}</div>
    )
}

export default Projects;
