import React from 'react';

const sections = [
{ id: 'about', title: 'About Me' },
{ id: 'portfolio', title: 'Portfolio' },
{ id: 'contact', title: 'Contact' },
{ id: 'resume', title: 'Resume' }
];

const Navigation = () => {
return (
    <nav>
    <ul>
        {sections.map(section => (
        <li key={section.id}>
            <a href={`#${section.id}`}>{section.title}</a>
        </li>
        ))}
    </ul>
    </nav>
);
};

export default Navigation;
