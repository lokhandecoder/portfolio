import React from 'react';

interface ProjectCardProps {
  image: string; 
  title: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, link }) => {

  return (
    <div style={styles.card} onClick={() => window.open(link, '_blank')}>
      <img src={image} alt={title} style={styles.image} />
      <h3 style={styles.title}>{title}</h3>
    </div>
  );
};


const styles: { card: React.CSSProperties; image: React.CSSProperties; title: React.CSSProperties } = {
  card: {
    cursor: 'pointer',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '90%',
    textAlign: 'center',
    margin: '16px',
    transition: 'transform 0.3s',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '8px 0',
  },
};

export default ProjectCard;
