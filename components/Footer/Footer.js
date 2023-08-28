import React from 'react';

const Footer = () => {
return (
    <footer>
    <p>&copy; {new Date().getFullYear()} Developer's Portfolio</p>
    <div className="social-links">
        <a href="GitHub Profile Link" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="LinkedIn Profile Link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="Third Platform Profile Link" target="_blank" rel="noopener noreferrer">Third Platform</a>
    </div>
    </footer>
);
};

export default Footer;
