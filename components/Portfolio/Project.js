import React from 'react';
import './Project.css';   // Import the CSS for the Project component
const Project = ({ title, description, liveLink, repoLink, image }) => {
return (
    <div className="project">
    <img src={image} alt={`Screenshot of ${title}`} />
    <h3>{title}</h3>
    <p>{description}</p>
    <div>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">Live</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
    </div>
);
};

export default Project;
