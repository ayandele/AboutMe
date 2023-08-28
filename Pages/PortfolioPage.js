import React from 'react';
import Project from '../components/Portfolio/Project';

const projects = [
{
    title: 'Project 1',
    description: 'Description of project 1...',
    liveLink: 'Live Link 1',
    repoLink: 'GitHub Repo Link 1',
    image: 'Project1ImageURL'
},
  // Add more projects here
];

const PortfolioPage = () => {
return (
    <section id="portfolio">
    <h2>Portfolio</h2>
    <div className="project-list">
        {projects.map((project, index) => (
        <Project key={index} {...project} />
        ))}
    </div>
    </section>
);
};

export default PortfolioPage;
