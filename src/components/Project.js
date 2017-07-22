import React from 'react';
import PropTypes from 'prop-types';

function Project(props) {
    const technologies = props.technologies.map(technology => (
        <span
            key={technology}
            className="label label-info"
        >{technology}</span>
    ));
    return (
        <section className="professional-info">

            <h2 className="block-header"> { props.name } </h2>

            <section className="professional-info__block">
                <p className="project__block">{ props.description }</p>
                <p  className="project__block">You can find the source code of the project on <a href={ props.repository } className="link">github</a> or take a look at live demo:</p>
                <a href={ props.url } className="preview__big">
                    <div className="preview__image preview__big-image camper_leaderboard">
                        <img
                            src={props.image}
                            alt={props.name}
                        />
                    </div>
                    <p className="preview__image-desc preview__big-image-desc">Live demo</p>
                </a>
            </section>
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
