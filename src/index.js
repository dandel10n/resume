import React from 'react';
import ReactDOM from 'react-dom';
import css from './static_src/sass/style.scss';
import Sidebar from './components/Sidebar.js';
import ProfessionalInfo from './components/ProfessionalInfo.js';

class ResumeTemplate extends React.Component {

    render() {
        return (
            <div className="resume-container">
                <Sidebar />
                <ProfessionalInfo />
            </div>
        )
    }
}

ReactDOM.render(
    <ResumeTemplate />,
    document.getElementById('root')
);
