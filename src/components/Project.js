import React from 'react';
import PropTypes from 'prop-types';

function Project(props) {
    const technologies = props.technologies.map(technology => (
        <span
            key={technology}
            className="label label-info"
        >{technology}&emsp;</span>
    ));
    return (
        <section className="professional-info__block">
            <h2 className="project__name"> { props.name } </h2>
            <div className="project__image">
                <a href={ props.url } className="preview">
                    <img className="preview__image"
                        src={props.image}
                        alt={props.name}
                    />
                    <p className="preview__image-desc">Live demo</p>
                </a>
            </div>
            <div className="project__description">
                <p>{ props.description }</p>
                <p>{technologies}</p>
            </div>
            <p  className="project__link">Project on <a href={ props.repository } className="link">github</a></p>

        </section>
    )
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.array.isRequired,
    repository: PropTypes.string.isRequired
};


export default Project;
