import { Container, Row, Col, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import bookstorebackend from '../assets/img/BookStore BackEnd.png';
import bookstorefrontend from '../assets/img/bookstore-frontend.png';
import simpleColorChooser from '../assets/img/ColorChooser.png';
import draganddropapp from '../assets/img/Drag and Drop app.png';
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
      title: 'Simple Color Chooser',
      sourceCode: 'https://github.com/tharindu152/simple-color-chooser',
      imgUrl: simpleColorChooser,
    },
    {
      title: 'Drag and Drop App',
      sourceCode: 'https://github.com/tharindu152/drag-and-drop-app',
      imgUrl: draganddropapp,
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
                    Bookstore web application is one of the main projects which
                    I have completed. Bookstore web app includes a Java backend
                    and a React frontend. Please click the link to check out the
                    source code of bookstore project. Further, I have created
                    several desktop apps using java and JavaFX.
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
