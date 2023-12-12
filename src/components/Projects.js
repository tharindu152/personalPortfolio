import { Container, Row, Col, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import bookstorebackend from '../assets/img/BookStore BackEnd.png';
import bookstorefrontend from '../assets/img/bookstore-frontend.png';
import googledesignclone from '../assets/img/google.png'
import iknamdesignclone from '../assets/img/ikman.png'
import galleryapp from '../assets/img/Gallery App.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Bookstore Frontend',
      sourceCode: 'https://github.com/tharindu152/bookstore-frontend',
      imgUrl: bookstorefrontend,
    },
    {
      title: 'Bookstore Backend',
      sourceCode: 'https://github.com/tharindu152/bookstore-backend',
      imgUrl: bookstorebackend,
    },
    {
      title: 'Ikman Design Clone',
      sourceCode: 'https://github.com/tharindu152/ikman-design-clone',
      imgUrl: iknamdesignclone,
    },
    {
      title: 'Google Design Clone',
      sourceCode: 'https://github.com/tharindu152/google-design-clone',
      imgUrl: googledesignclone,
    },
    {
      title: 'Gallery App',
      sourceCode: 'https://github.com/tharindu152/gallery-app',
      imgUrl: galleryapp,
    },
  ];

  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                  I have successfully developed multiple full-stack web applications using a variety of technology stacks, 
                  including Java Spring, MERN, and MEAN. In order to access to the source code of these projects, kindly refer
                   to the following links. Projects components of my portfolio will be regularly updated as and when new projects are launched.
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-right'
        src={colorSharp2}
        alt='background'
      ></img>
    </section>
  );
};
