import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../../Data/ProjectData.json'; // Adjust path as needed
import project1image from "../../Resources/ProjectsImages/task_management.png";
import crudwithjson from "../../Resources/ProjectsImages/crud_with_json.png";
import contactManagement from "../../Resources/ProjectsImages/contact_management.png";
function ProjectsList() {
  const projects = [
    {
      image: project1image,
      title: "Task Management App",
      link: "https://lokhandecoder.github.io/taskmanagement/#/"
    },
    {
      image: crudwithjson,
      title: "CRUD with JSON",
      link: "https://lokhandecoder.github.io/CRUDwithjson/"
    },
    {
      image: contactManagement,
      title: "Contact Management App",
      link: "https://lokhandecoder.github.io/ContactManagement"
    },
    {
      image: project1image,
      title: "Project 2",
      link: "https://example.com/project2"
    },
    {
      image: project1image,
      title: "Task Management App",
      link: "https://lokhandecoder.github.io/taskmanagement/#/"
    },
    {
      image: project1image,
      title: "Project 2",
      link: "https://example.com/project2"
    }
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap', // Allow wrapping to the next row
        gap: '16px', // Space between items
        justifyContent: 'center' // Center items in rows
      }}
    >
      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            flex: '1 0 calc(33.333% - 16px)',
            transition: 'box-shadow 0.3s ease-in-out',
            borderRadius: '8px', // Optional: Add rounded corners
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = '0 4px 8px rgba(255, 255, 255, 0.5)')
          }
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
        >
          <ProjectCard
            image={project.image}
            title={project.title}
            link={project.link}
          />
        </div>
      ))}
    </div>
  );
}


export default ProjectsList;
