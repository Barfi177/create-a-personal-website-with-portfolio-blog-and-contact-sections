import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

function PortfolioPage() {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a brief description of Project 1.',
      image: '/images/project1.jpg',
    },
    {
      title: 'Project 2',
      description: 'This is a brief description of Project 2.',
      image: '/images/project2.jpg',
    },
    // Add more projects here...
  ];

  return (
    <div>
      <Head>
        <title>Portfolio | My Website</title>
      </Head>
      <Header />
      <main>
        <h1>Portfolio</h1>
        <ul>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default PortfolioPage;